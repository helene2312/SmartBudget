import { useSyncExternalStore } from 'react';

type UserState = {
    userId: string | null;
};

let state: UserState = {
    userId: null,
};

const listeners = new Set<() => void>();

function emitChange() {
    listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
    listeners.add(listener);

    return () => {
        listeners.delete(listener);
    };
}

function getSnapshot() {
    return state;
}

export function setUserId(userId: string) {
    state = { ...state, userId };
    emitChange();
}

export function clearUserId() {
    state = { ...state, userId: null };
    emitChange();
}

export function getUserId() {
    return state.userId;
}

export function useUserStore() {
    return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
