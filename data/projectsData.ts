interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData = [
  {
    title: '기업용 ERP 시스템 (Flutter App)',
    description: `Dart/Flutter 도입 후 2주 만에 실무 개발에 착수하여 프로젝트를 주도했습니다. 백엔드 팀과의 협업을 통해 REST API 규격을 표준화함으로써 데이터 연동 오류를 획기적으로 줄였으며, 모바일과 웹을 동시에 지원하는 멀티 플랫폼 ERP 환경을 구축했습니다.`,
    imgSrc: '/static/images/project/flutter-erp.png',
    href: '#',
  },
  {
    title: '사내 통합 회원 및 라이선스 관리 시스템',
    description: `Firebase Firestore의 db.batch()를 활용하여 대량의 라이선스 키 일괄 등록 기능을 구현, 수동 작업 대비 등록 효율을 극대화했습니다. 중앙화된 인증 서버 구축을 통해 사내 3개 이상의 연동 프로그램에 대한 보안 관리 및 라이선스 정책을 통합 운영할 수 있도록 설계했습니다.`,
    imgSrc: '/static/images/project/license.png',
    href: '#',
  },
  {
    title: 'Unreal Engine SSO 인증 서버',
    description: `Unreal Engine 클라이언트와 Cafe24 계정 간의 OAuth 2.0 SSO 인증 시스템을 독자 구축했습니다. Webhook 기반의 실시간 라이선스 제어 로직을 통해 결제 상태에 따른 권한 부여를 자동화하여 운영 리소스를 절감하고 보안성을 강화했습니다.`,
    imgSrc: '/static/images/project/unreal-sso.png',
    href: '#',
  },
  {
    title: 'LS산전 Solution Square',
    description: `React/TypeScript 기반의 SPA 전환을 통해 기존 정적 페이지 대비 사용자 인터랙션 속도를 개선했습니다. 특히 QueryDSL을 활용한 동적 쿼리 최적화로 복잡한 조건의 검색 성능을 향상시켜 대규모 데이터 환경에서도 원활한 탐색 경험을 제공했습니다.`,
    imgSrc: '/static/images/project/ls-electric.png',
    href: 'https://ssq.ls-electric.com',
  },
  {
    title: '곤지암 리조트 로봇 관제 시스템',
    description: `MQTT 프로토콜을 활용한 저지연(Low-latency) 실시간 로봇 관제 시스템입니다. Prisma와 MySQL을 연동하여 리조트 내 수백 개의 시설물 위치 데이터를 관리하고, 실시간 상태 정보를 대시보드에 시각화하여 관제 효율성을 높였습니다.`,
    imgSrc: '/static/images/project/robot.png',
    href: '#',
  },
  {
    title: '전북TP 불법 어업 모니터링 시스템',
    description: `Figma를 활용한 UI/UX 설계부터 프론트엔드 구현까지 담당했습니다. 모니터링 요원의 워크플로우를 분석하여 정보 접근성을 개선한 대시보드를 구축했으며, 데이터 시각화를 통해 불법 어업 탐지 가독성을 높여 현장 대응력을 개선했습니다.`,
    imgSrc: '/static/images/project/monitoring.png',
    href: '#',
  },
]

export default projectsData
