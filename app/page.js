import Image from "next/image";

export default function Home() {
  return (
    <main className="container px-8">
      <div className="navbar bg-base-100">
        <a className="btn-lg btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div>깃허브 푸시 후 자동 빌드 배포 테스트 완료!</div>
    </main>
  );
}
