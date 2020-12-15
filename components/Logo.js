/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <a>
          <h1 className="mt-2 mb-0">
            <strong>Asbury Park High School</strong>
          </h1>
          <h2 className="mt-0">Distinguished Alumni Hall of Fame</h2>
        </a>
      </Link>
      <style jsx>
        {`
          div {
            text-align: center;
            padding: 5px;
          }
          h1 {
            color: #386982;
            font-size: 1.8rem;
            font-family: 'Open Sans Bold', 'Arial', sans-serif;
          }

          h2 {
            color: #59a7cf;
            font-size: 1.7rem;
            font-family: 'Merriweather',serif;
          }
        `}
      </style>
    </div>
  );
}
