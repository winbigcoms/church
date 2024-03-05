"use client";
import "./style.css";

export const Header = () => {
  return (
    <header className="header flex justify-between px-8 items-center">
      <h1>
        <a href="/" aria-label="교회 홈으로" title="교회 홈으로">
          명덕교회
        </a>
      </h1>
      <nav>
        <ul className="flex gap-20">
          <li tabIndex={1}>교회 소개</li>
          <li tabIndex={1}>예배 안내</li>
          <li tabIndex={1}>주보</li>
          <li tabIndex={1}>사진</li>
        </ul>
      </nav>
    </header>
  );
};
