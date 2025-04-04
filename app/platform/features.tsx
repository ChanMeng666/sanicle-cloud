import { redirect } from 'next/navigation';

export default function Features() {
  redirect('/platform/overview');
  return null;
} 