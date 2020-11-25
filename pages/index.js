import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import SubMenu from '../layouts/SubMenu'
import MemberGrid from '../components/MemberGrid'
import styles from '../styles/SubMenu.module.css'

export default function Home() {
  const [tab, setTab] = useState('latest')

  return (
    <Container>
      <Head>
        <title>Asbury Park High School Hall of Fame</title>
      </Head>
      <SubMenu>
        <Row>
          <Col sm={12} md={2}>
            <h3 className={styles.subMenuTitle}>
              <strong>Welcome</strong>
            </h3>
          </Col>
          <Col
            sm={12}
            md={{ span: 6, offset: 2 }}
            className={styles.subMenuTitle}
          >
            <Button
              onClick={() => setTab('latest')}
              variant="link"
              className={
                tab === 'latest' ? styles.activeBtn : styles.subMenuBtn
              }
            >
              LATEST
            </Button>
            <Button
              variant="link"
              onClick={() => setTab('about')}
              className={tab === 'about' ? styles.activeBtn : styles.subMenuBtn}
            >
              ABOUT
            </Button>
            <Button
              variant="link"
              onClick={() => setTab('mission statement')}
              className={
                tab === 'mission statement'
                  ? styles.activeBtn
                  : styles.subMenuBtn
              }
            >
              MISSION STATEMENT
            </Button>
          </Col>
        </Row>
      </SubMenu>
      <Row className="mx-2 mt-2 content">
        <Col sm={12} md={6} className="p-4">
          {tab === 'latest' && <div>#386982</div>}
          {tab === 'about' && <div>about content</div>}
          {tab === 'mission statement' && <div>mission statement content</div>}
        </Col>
        <Col sm={12} md={6} className="p-4">
          <Image
            src="/c_scale,e_shadow:40,r_20,w_800/v1605826428/asburyparkhighschoolhalloffame/asburyparkhighschool-original_bbs069.jpg"
            alt="Asbury Park High School"
            width="800"
            height="452"
            layout="responsive"
          />
        </Col>
      </Row>
      <Row className="mx-2 content-no-border">
        <Col sm={12}>
          <MemberGrid />
        </Col>
      </Row>
    </Container>
  )
}
