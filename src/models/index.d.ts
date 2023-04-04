import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerCreateParticipant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreateParticipant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly createmeetingID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCreateParticipant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreateParticipant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly createmeetingID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CreateParticipant = LazyLoading extends LazyLoadingDisabled ? EagerCreateParticipant : LazyCreateParticipant

export declare const CreateParticipant: (new (init: ModelInit<CreateParticipant>) => CreateParticipant) & {
  copyOf(source: CreateParticipant, mutator: (draft: MutableModel<CreateParticipant>) => MutableModel<CreateParticipant> | void): CreateParticipant;
}

type EagerCreateMeeting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreateMeeting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly location: string;
  readonly date: string;
  readonly CreateParticipants?: (CreateParticipant | null)[] | null;
  readonly CreateHosts?: (CreateHost | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCreateMeeting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreateMeeting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly location: string;
  readonly date: string;
  readonly CreateParticipants: AsyncCollection<CreateParticipant>;
  readonly CreateHosts: AsyncCollection<CreateHost>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CreateMeeting = LazyLoading extends LazyLoadingDisabled ? EagerCreateMeeting : LazyCreateMeeting

export declare const CreateMeeting: (new (init: ModelInit<CreateMeeting>) => CreateMeeting) & {
  copyOf(source: CreateMeeting, mutator: (draft: MutableModel<CreateMeeting>) => MutableModel<CreateMeeting> | void): CreateMeeting;
}

type EagerCreateHost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreateHost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly createmeetingID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCreateHost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreateHost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly createmeetingID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CreateHost = LazyLoading extends LazyLoadingDisabled ? EagerCreateHost : LazyCreateHost

export declare const CreateHost: (new (init: ModelInit<CreateHost>) => CreateHost) & {
  copyOf(source: CreateHost, mutator: (draft: MutableModel<CreateHost>) => MutableModel<CreateHost> | void): CreateHost;
}