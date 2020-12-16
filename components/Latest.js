import styled from 'styled-components';
import styles from 'styles/Banner.module.css';

const Wrapper = styled.section`
  background: url(/images/asbury-high-school-1250x526_wplohr.png)
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 526px;
  margin-bottom: 2rem;
  padding-top: 8em;
  padding-bottom: 8em;
`;

/* eslint-disable max-len */
export default function Latest() {
  return (
    <>
      <Wrapper>
        <div
          className={`${styles.content} animate__animated animate__fadeIn slow`}
        >
          <h3 className={`${styles.title} my-3`}>
            <strong>APHS Distingished Hall of Fame</strong>
          </h3>
          <p className={styles.tagLine}>
            Welcome to the Asbury Park High School Distinguished Alumni Hall of
            Fame. Here we recognize and honor those APHS graduates who have used
            the skills and knowledge which they acquired in the High School to
            become “Distinguished” adults in many different and varied fields!
          </p>
        </div>
      </Wrapper>
      <div className="m-3 text-center">
        <p>
          Welcome to the Asbury Park High School Distinguished Alumni Hall of
          Fame. Part of our mission is to recognize and honor those APHS
          graduates who have used the skills and knowledge which they acquired
          in the High School to become “Distinguished” adults in many different
          and varied fields. Another and equally important portion of our
          mission is to instill in the current APHS students a feeling that they
          too can be successful adults irrespective of their often difficult
          backgrounds.
        </p>
        <p>
          <strong>
            A part of that task is for us to install a plaque in the hallway of
            the high school displaying a photo of the inductee together with a
            brief description of their accomplishments so that the current
            students can actually visualize who was inducted and why.
          </strong>
        </p>
      </div>
    </>
  );
}
