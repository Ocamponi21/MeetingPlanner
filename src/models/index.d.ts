import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerHost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Host, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Host, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Host = LazyLoading extends LazyLoadingDisabled ? EagerHost : LazyHost

export declare const Host: (new (init: ModelInit<Host>) => Host) & {
  copyOf(source: Host, mutator: (draft: MutableModel<Host>) => MutableModel<Host> | void): Host;
}