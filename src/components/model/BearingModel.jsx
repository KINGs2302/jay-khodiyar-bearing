'use client';

import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

export default function BearingModel({ url = './models/bearings.glb' }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1} />;
}
