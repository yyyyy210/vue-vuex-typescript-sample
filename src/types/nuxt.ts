import Vue from 'vue';
import { Route } from 'vue-router';
import { Store } from 'vuex';
import { Context as OrgContext } from '@nuxt/types';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import VueI18n, { IVueI18n } from 'vue-i18n';

interface AuthModule {
  ctx: Context;
  options: { [key: string]: any };
  strategies: { [key: string]: any };
  redirect: (name: string, noRouter?: boolean) => void;
  loginWith: (strategy: string, params: any) => Promise<any>;
  logout: () => Promise<any>;
  // TODO: _errorListeners, $storage, $stateの定義を充実させる
  onRedirect: (cb: (to: string, from: string) => string | undefined) => void;
}

export interface Context extends OrgContext {
  req: OrgContext['req'] & { body: any };
  app: Vue & {
    $auth: AuthModule;
    store: Store<any>;
    i18n: VueI18n & IVueI18n;
    localePath(route: string | Route, locale?: string): string;
    switchLocalePath(locale: string): string;
    getRouteBaseName(route: Route): string;
  };
}

export interface Error {
  statusCode: number;
  path: string;
  message: string;
}
