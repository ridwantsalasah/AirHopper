/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const VerifyOtpLazyImport = createFileRoute('/verify-otp')()
const ResetPasswordLazyImport = createFileRoute('/reset-password')()
const RegisterLazyImport = createFileRoute('/register')()
const ProfileLazyImport = createFileRoute('/profile')()
const NotificationLazyImport = createFileRoute('/notification')()
const LoginLazyImport = createFileRoute('/login')()
const ForgotPasswordLazyImport = createFileRoute('/forgot-password')()
const IndexLazyImport = createFileRoute('/')()
const TicketsIndexLazyImport = createFileRoute('/tickets/')()
const HistoryIndexLazyImport = createFileRoute('/history/')()

// Create/Update Routes

const VerifyOtpLazyRoute = VerifyOtpLazyImport.update({
  id: '/verify-otp',
  path: '/verify-otp',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/verify-otp.lazy').then((d) => d.Route))

const ResetPasswordLazyRoute = ResetPasswordLazyImport.update({
  id: '/reset-password',
  path: '/reset-password',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/reset-password.lazy').then((d) => d.Route),
)

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const ProfileLazyRoute = ProfileLazyImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile.lazy').then((d) => d.Route))

const NotificationLazyRoute = NotificationLazyImport.update({
  id: '/notification',
  path: '/notification',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/notification.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const ForgotPasswordLazyRoute = ForgotPasswordLazyImport.update({
  id: '/forgot-password',
  path: '/forgot-password',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/forgot-password.lazy').then((d) => d.Route),
)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const TicketsIndexLazyRoute = TicketsIndexLazyImport.update({
  id: '/tickets/',
  path: '/tickets/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/tickets/index.lazy').then((d) => d.Route))

const HistoryIndexLazyRoute = HistoryIndexLazyImport.update({
  id: '/history/',
  path: '/history/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/history/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/forgot-password': {
      id: '/forgot-password'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof ForgotPasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/notification': {
      id: '/notification'
      path: '/notification'
      fullPath: '/notification'
      preLoaderRoute: typeof NotificationLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/reset-password': {
      id: '/reset-password'
      path: '/reset-password'
      fullPath: '/reset-password'
      preLoaderRoute: typeof ResetPasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/verify-otp': {
      id: '/verify-otp'
      path: '/verify-otp'
      fullPath: '/verify-otp'
      preLoaderRoute: typeof VerifyOtpLazyImport
      parentRoute: typeof rootRoute
    }
    '/history/': {
      id: '/history/'
      path: '/history'
      fullPath: '/history'
      preLoaderRoute: typeof HistoryIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/tickets/': {
      id: '/tickets/'
      path: '/tickets'
      fullPath: '/tickets'
      preLoaderRoute: typeof TicketsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/forgot-password': typeof ForgotPasswordLazyRoute
  '/login': typeof LoginLazyRoute
  '/notification': typeof NotificationLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/reset-password': typeof ResetPasswordLazyRoute
  '/verify-otp': typeof VerifyOtpLazyRoute
  '/history': typeof HistoryIndexLazyRoute
  '/tickets': typeof TicketsIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/forgot-password': typeof ForgotPasswordLazyRoute
  '/login': typeof LoginLazyRoute
  '/notification': typeof NotificationLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/reset-password': typeof ResetPasswordLazyRoute
  '/verify-otp': typeof VerifyOtpLazyRoute
  '/history': typeof HistoryIndexLazyRoute
  '/tickets': typeof TicketsIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/forgot-password': typeof ForgotPasswordLazyRoute
  '/login': typeof LoginLazyRoute
  '/notification': typeof NotificationLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/reset-password': typeof ResetPasswordLazyRoute
  '/verify-otp': typeof VerifyOtpLazyRoute
  '/history/': typeof HistoryIndexLazyRoute
  '/tickets/': typeof TicketsIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/forgot-password'
    | '/login'
    | '/notification'
    | '/profile'
    | '/register'
    | '/reset-password'
    | '/verify-otp'
    | '/history'
    | '/tickets'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/forgot-password'
    | '/login'
    | '/notification'
    | '/profile'
    | '/register'
    | '/reset-password'
    | '/verify-otp'
    | '/history'
    | '/tickets'
  id:
    | '__root__'
    | '/'
    | '/forgot-password'
    | '/login'
    | '/notification'
    | '/profile'
    | '/register'
    | '/reset-password'
    | '/verify-otp'
    | '/history/'
    | '/tickets/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ForgotPasswordLazyRoute: typeof ForgotPasswordLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  NotificationLazyRoute: typeof NotificationLazyRoute
  ProfileLazyRoute: typeof ProfileLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  ResetPasswordLazyRoute: typeof ResetPasswordLazyRoute
  VerifyOtpLazyRoute: typeof VerifyOtpLazyRoute
  HistoryIndexLazyRoute: typeof HistoryIndexLazyRoute
  TicketsIndexLazyRoute: typeof TicketsIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ForgotPasswordLazyRoute: ForgotPasswordLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  NotificationLazyRoute: NotificationLazyRoute,
  ProfileLazyRoute: ProfileLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  ResetPasswordLazyRoute: ResetPasswordLazyRoute,
  VerifyOtpLazyRoute: VerifyOtpLazyRoute,
  HistoryIndexLazyRoute: HistoryIndexLazyRoute,
  TicketsIndexLazyRoute: TicketsIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/forgot-password",
        "/login",
        "/notification",
        "/profile",
        "/register",
        "/reset-password",
        "/verify-otp",
        "/history/",
        "/tickets/"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/forgot-password": {
      "filePath": "forgot-password.lazy.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/notification": {
      "filePath": "notification.lazy.jsx"
    },
    "/profile": {
      "filePath": "profile.lazy.jsx"
    },
    "/register": {
      "filePath": "register.lazy.jsx"
    },
    "/reset-password": {
      "filePath": "reset-password.lazy.jsx"
    },
    "/verify-otp": {
      "filePath": "verify-otp.lazy.jsx"
    },
    "/history/": {
      "filePath": "history/index.lazy.jsx"
    },
    "/tickets/": {
      "filePath": "tickets/index.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
