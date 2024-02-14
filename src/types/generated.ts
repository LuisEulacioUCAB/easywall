/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type CreatedAtInput = {
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
};

export type File = {
  encoding: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  mimetype: Scalars['String']['input'];
};

export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  appleSignup?: Maybe<AuthPayload>;
  changePassword?: Maybe<AuthPayload>;
  facebookSignup?: Maybe<AuthPayload>;
  forgotPassword?: Maybe<ForgotPasswordPayload>;
  googleSignup?: Maybe<AuthPayload>;
  login?: Maybe<AuthPayload>;
  recaptcha?: Maybe<RecaptchaResponse>;
  signup?: Maybe<AuthPayload>;
  updateUser?: Maybe<User>;
};


export type MutationAppleSignupArgs = {
  token: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationChangePasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationFacebookSignupArgs = {
  token: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
  form: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};


export type MutationGoogleSignupArgs = {
  token: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRecaptchaArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  data?: InputMaybe<UpdateUserInput>;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  userProviders?: Maybe<UserProviderPayload>;
  users?: Maybe<UsersPayload>;
};


export type QueryUserProvidersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserProvidersWhere>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersWhere>;
};

export type RecaptchaResponse = {
  __typename?: 'RecaptchaResponse';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export enum SocialProviders {
  Apple = 'APPLE',
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE',
  System = 'SYSTEM'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateUserInput = {
  file?: InputMaybe<Scalars['Upload']['input']>;
  user?: InputMaybe<UserInput>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  email_verified_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  remember_token?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  sex?: Maybe<UsersSex>;
  social_providers?: Maybe<Array<Maybe<UserSocialProviders>>>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  email_verified_at?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  remember_token?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<UsersSex>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
};

export type UserProviderPayload = {
  __typename?: 'UserProviderPayload';
  count?: Maybe<Scalars['Int']['output']>;
  userProviders?: Maybe<Array<Maybe<UserSocialProviders>>>;
};

export type UserProvidersWhere = {
  created_at?: InputMaybe<CreatedAtInput>;
  provider?: InputMaybe<SocialProviders>;
};

export type UserRole = {
  __typename?: 'UserRole';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<UserRoles>;
};

export enum UserRoles {
  Administrator = 'ADMINISTRATOR',
  Editor = 'EDITOR',
  SuperAdministrator = 'SUPER_ADMINISTRATOR',
  User = 'USER'
}

export type UserSocialProviders = {
  __typename?: 'UserSocialProviders';
  created_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  provider?: Maybe<SocialProviders>;
  provider_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  url_register?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type UsersPayload = {
  __typename?: 'UsersPayload';
  count?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export enum UsersSex {
  Female = 'FEMALE',
  Male = 'MALE',
  NoApply = 'NO_APPLY'
}

export type UsersWhere = {
  created_at?: InputMaybe<CreatedAtInput>;
  name?: InputMaybe<StringFilter>;
};

export type SignupMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'AuthPayload', token: string | null, user: { __typename?: 'User', id: number } | null } | null };

export type GoogleSignupMutationVariables = Exact<{
  token: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
}>;


export type GoogleSignupMutation = { __typename?: 'Mutation', googleSignup: { __typename?: 'AuthPayload', token: string | null, user: { __typename?: 'User', id: number } | null } | null };

export type RecaptchaMutationVariables = Exact<{
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type RecaptchaMutation = { __typename?: 'Mutation', recaptcha: { __typename?: 'RecaptchaResponse', success: boolean | null } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: number, name: string, email: string, avatar: string | null, sex: UsersSex | null, birthday: string | null, social_providers: Array<{ __typename?: 'UserSocialProviders', id: number, provider: SocialProviders | null, provider_id: string | null } | null> | null, role: { __typename?: 'UserRole', id: number | null, name: UserRoles | null } | null } | null };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
  form: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'ForgotPasswordPayload', success: boolean | null } | null };

export type ChangePasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'AuthPayload', token: string | null, user: { __typename?: 'User', id: number } | null } | null };

export type UpdateUserMutationVariables = Exact<{
  data?: InputMaybe<UpdateUserInput>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: number, name: string, email: string, avatar: string | null, sex: UsersSex | null, birthday: string | null } | null };

export type FacebookSignupMutationVariables = Exact<{
  token: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
}>;


export type FacebookSignupMutation = { __typename?: 'Mutation', facebookSignup: { __typename?: 'AuthPayload', token: string | null, user: { __typename?: 'User', id: number } | null } | null };

export type AppleSignupMutationVariables = Exact<{
  token: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
}>;


export type AppleSignupMutation = { __typename?: 'Mutation', appleSignup: { __typename?: 'AuthPayload', token: string | null, user: { __typename?: 'User', id: number } | null } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', token: string | null, user: { __typename?: 'User', id: number } | null } | null };


export const SignupDocument = gql`
    mutation Signup($email: String!, $password: String!, $name: String!, $url: String!) {
  signup(email: $email, password: $password, name: $name, url: $url) {
    user {
      id
    }
    token
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const GoogleSignupDocument = gql`
    mutation googleSignup($token: String!, $url: String) {
  googleSignup(token: $token, url: $url) {
    user {
      id
    }
    token
  }
}
    `;
export type GoogleSignupMutationFn = Apollo.MutationFunction<GoogleSignupMutation, GoogleSignupMutationVariables>;

/**
 * __useGoogleSignupMutation__
 *
 * To run a mutation, you first call `useGoogleSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleSignupMutation, { data, loading, error }] = useGoogleSignupMutation({
 *   variables: {
 *      token: // value for 'token'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useGoogleSignupMutation(baseOptions?: Apollo.MutationHookOptions<GoogleSignupMutation, GoogleSignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GoogleSignupMutation, GoogleSignupMutationVariables>(GoogleSignupDocument, options);
      }
export type GoogleSignupMutationHookResult = ReturnType<typeof useGoogleSignupMutation>;
export type GoogleSignupMutationResult = Apollo.MutationResult<GoogleSignupMutation>;
export type GoogleSignupMutationOptions = Apollo.BaseMutationOptions<GoogleSignupMutation, GoogleSignupMutationVariables>;
export const RecaptchaDocument = gql`
    mutation Recaptcha($email: String!, $token: String!) {
  recaptcha(email: $email, token: $token) {
    success
  }
}
    `;
export type RecaptchaMutationFn = Apollo.MutationFunction<RecaptchaMutation, RecaptchaMutationVariables>;

/**
 * __useRecaptchaMutation__
 *
 * To run a mutation, you first call `useRecaptchaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecaptchaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recaptchaMutation, { data, loading, error }] = useRecaptchaMutation({
 *   variables: {
 *      email: // value for 'email'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useRecaptchaMutation(baseOptions?: Apollo.MutationHookOptions<RecaptchaMutation, RecaptchaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RecaptchaMutation, RecaptchaMutationVariables>(RecaptchaDocument, options);
      }
export type RecaptchaMutationHookResult = ReturnType<typeof useRecaptchaMutation>;
export type RecaptchaMutationResult = Apollo.MutationResult<RecaptchaMutation>;
export type RecaptchaMutationOptions = Apollo.BaseMutationOptions<RecaptchaMutation, RecaptchaMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    name
    email
    avatar
    sex
    birthday
    social_providers {
      id
      provider
      provider_id
    }
    role {
      id
      name
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export function useCurrentUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserSuspenseQueryHookResult = ReturnType<typeof useCurrentUserSuspenseQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!, $redirectUrl: String!, $form: String!) {
  forgotPassword(email: $email, redirectUrl: $redirectUrl, form: $form) {
    success
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      redirectUrl: // value for 'redirectUrl'
 *      form: // value for 'form'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($email: String!, $password: String!, $token: String!) {
  changePassword(email: $email, password: $password, token: $token) {
    user {
      id
    }
    token
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UpdateUserInput) {
  updateUser(data: $data) {
    id
    name
    email
    avatar
    sex
    birthday
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const FacebookSignupDocument = gql`
    mutation FacebookSignup($token: String!, $url: String) {
  facebookSignup(token: $token, url: $url) {
    user {
      id
    }
    token
  }
}
    `;
export type FacebookSignupMutationFn = Apollo.MutationFunction<FacebookSignupMutation, FacebookSignupMutationVariables>;

/**
 * __useFacebookSignupMutation__
 *
 * To run a mutation, you first call `useFacebookSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFacebookSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [facebookSignupMutation, { data, loading, error }] = useFacebookSignupMutation({
 *   variables: {
 *      token: // value for 'token'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useFacebookSignupMutation(baseOptions?: Apollo.MutationHookOptions<FacebookSignupMutation, FacebookSignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FacebookSignupMutation, FacebookSignupMutationVariables>(FacebookSignupDocument, options);
      }
export type FacebookSignupMutationHookResult = ReturnType<typeof useFacebookSignupMutation>;
export type FacebookSignupMutationResult = Apollo.MutationResult<FacebookSignupMutation>;
export type FacebookSignupMutationOptions = Apollo.BaseMutationOptions<FacebookSignupMutation, FacebookSignupMutationVariables>;
export const AppleSignupDocument = gql`
    mutation AppleSignup($token: String!, $url: String) {
  appleSignup(token: $token, url: $url) {
    user {
      id
    }
    token
  }
}
    `;
export type AppleSignupMutationFn = Apollo.MutationFunction<AppleSignupMutation, AppleSignupMutationVariables>;

/**
 * __useAppleSignupMutation__
 *
 * To run a mutation, you first call `useAppleSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppleSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appleSignupMutation, { data, loading, error }] = useAppleSignupMutation({
 *   variables: {
 *      token: // value for 'token'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useAppleSignupMutation(baseOptions?: Apollo.MutationHookOptions<AppleSignupMutation, AppleSignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AppleSignupMutation, AppleSignupMutationVariables>(AppleSignupDocument, options);
      }
export type AppleSignupMutationHookResult = ReturnType<typeof useAppleSignupMutation>;
export type AppleSignupMutationResult = Apollo.MutationResult<AppleSignupMutation>;
export type AppleSignupMutationOptions = Apollo.BaseMutationOptions<AppleSignupMutation, AppleSignupMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;