'use client';
import Image from 'next/image';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GoogleOAuthProvider clientId="646859054313-oi5j0le84njl7qdcsen35uf10u8sra9u.apps.googleusercontent.com">
        <GoogleLogin
          text="signin_with"
          onSuccess={(response) => {
            console.log(response);
            fetch('http://localhost:3000/authentication/google', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                token: response.credential,
              }),
            })
              .then((response) => response.json())
              .then((data) => console.log(data));
          }}
        />
      </GoogleOAuthProvider>
    </main>
  );
}
