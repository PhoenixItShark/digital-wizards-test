//app/(root)/(home)/page.tsx
import { Suspense } from "react";
import { Home } from "@/components";

function Page() {
  return (
    <section className='h-screen bg-background flex justify-center'>
      <Suspense fallback={<div className='text-white'>Загрузка...</div>}>
        <Home />
      </Suspense>
    </section>
  );
}

export default Page;
