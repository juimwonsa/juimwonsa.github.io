interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData = [
  {
    title: '사내 통합 회원 및 라이선스 관리 시스템',
    description: `Node.js와 Firebase를 활용하여 수십~수백 명 규모의 사내 프로그램 사용자를 위한 통합 인증 및 라이선스 관리 서버를 구축했습니다. API 설계를 통해 3개의 프로그램과 연동되는 중앙화된 시스템을 구현하여 유지보수 효율을 높였습니다.`,
    imgSrc: '/static/images/project/license.png', // 대표 이미지 (나중에 넣으세요)
    href: '#', // 사내 시스템이라 링크가 없다면 '#' 또는 회사 홈페이지 주소
  },
  {
    title: 'Unreal Engine SSO 인증 서버',
    description: `Unreal Engine 클라이언트와 Cafe24 계정을 연동하는 OAuth 2.0 기반 SSO 시스템입니다. Node.js 백엔드에서 보안 인증 플로우를 직접 구현하고, Webhook을 통해 결제 상태에 따른 실시간 라이선스 제어 기능을 개발했습니다.`,
    imgSrc: '/static/images/project/unreal-sso.png',
    href: '#',
  },
  {
    title: 'LS산전 Solution Square',
    description: `Spring Boot(JPA, QueryDSL) 백엔드와 React, TypeScript 프론트엔드를 모두 담당한 풀스택 프로젝트입니다. 기존 정적 페이지를 동적인 SPA로 전환하고, 복잡한 검색 필터링 기능을 최적화하여 사용자 경험을 개선했습니다.`,
    imgSrc: '/static/images/project/ls-electric.png',
    href: 'https://ssq.ls-electric.com', // 실제 서비스 중인 사이트라면 주소 입력
  },
  {
    title: '곤지암 리조트 로봇 관제 시스템',
    description: `MQTT 프로토콜을 활용하여 리조트 내 로봇의 실시간 위치를 관제하고 명령을 전송하는 웹 시스템입니다. Node.js와 Prisma, MySQL을 사용하여 시설물 데이터 관리 백엔드를 구축하고 반응형 대시보드를 구현했습니다.`,
    imgSrc: '/static/images/project/robot.png',
    href: '#',
  },
  {
    title: '전북TP 불법 어업 모니터링 시스템',
    description: `Figma를 활용한 UI 프로토타이핑부터 실제 웹 프론트엔드 구현까지 담당했습니다. 사용자 중심의 직관적인 대시보드 인터페이스를 설계하여 모니터링 효율성을 높였습니다.`,
    imgSrc: '/static/images/project/monitoring.png',
    href: '#',
  },
]

export default projectsData
