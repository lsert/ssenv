import React from 'react';
import loadable from '@loadable/component';

function Loading() {
    return <div>loading</div>;
}

export default function DyLoader(fn) {
    return loadable(fn, { fallback: <Loading />, });
}