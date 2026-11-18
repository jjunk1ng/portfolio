export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  period: string;
  role: string;
  team: string;
  tags: string[];
  background: string;
  process: string[];
  screens: { src: string; label: string }[];
  liveUrl?: string;
  result: string;
}

export interface Project {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  items: ProjectItem[];
}

export const projects: Project[] = [
  {
    id: "new-service",
    number: 1,
    title: "신규 서비스 기획",
    subtitle: "새로운 서비스 콘셉트 도출부터 화면 설계까지",
    description:
      "시장 분석과 사용자 리서치를 기반으로 신규 서비스를 기획하고, IA 설계부터 화면 기획까지 전 과정을 수행했습니다.",
    tags: ["신규 서비스", "서비스 기획", "UX 설계"],
    items: [
      {
        id: "goodock",
        title: "GOODOCK — 구독 통합 비교 서비스",
        summary:
          "분산된 구독 서비스 정보를 하나의 앱에서 통합 관리하고, 비교·추천할 수 있는 서비스를 기획했습니다.",
        period: "2024.08 - 2024.09",
        role: "서비스 기획 (Team Leader)",
        team: "4인 팀 프로젝트",
        tags: ["앱 기획", "구독 서비스", "UX 리서치"],
        background:
          "100조 구독경제시대, 성인 5명 중 3명이 구독서비스를 이용하고 있지만 1인당 평균 2.2개의 서비스를 각각 관리해야 하는 불편함이 존재합니다. 모바일 결제 플랫폼 방고(Bango) 조사에 따르면 72%의 소비자가 '구독 피로감'을 경험하고 있으며, 서비스마다 별도 관리·회원가입이 필요한 번거로움과 유사 서비스 간 혜택 비교의 어려움이 주요 Pain Point로 도출되었습니다.",
        process: [
          "데스크 리서치: 구독 경제 시장 규모 분석 (2016~2025 성장 추이), 구독 피로감 관련 데이터 수집",
          "필드 리서치: 20~30대 약 50명 대상 설문조사 — 구독서비스 이용 현황, 불편 사항, 정보 탐색 채널 조사",
          "SWOT 분석: 사용자 친화적 통합 서비스(S), 개인정보보호 우려(W), 미상용화 블루오션(O), 경쟁 심화(T)",
          "경쟁사 분석 & 포지셔닝 맵: 유사 구독 관리 서비스와 비교하여 '구독 관리 + 정보 제공 + 비교' 영역의 차별점 도출",
          "유저 퍼소나 & 저니맵: IT 종사자 김정욱(33세) 시나리오 — 바쁜 일상 속 구독 정보 탐색·비교·관리의 Pain Point와 해결 방안 도출",
          "Information Architecture(IA) 설계: 로그인, 홈, 캘린더, 커뮤니티, 마이페이지 등 전체 정보 구조도 설계",
          "디자인 시스템 정의: 컬러(#0074DE 등), 타이포(Pretendard, Tmoney RoundWind), 아이콘/일러스트 가이드 수립",
          "주요 화면 설계: 온보딩, 로그인(SSO), 홈, 내 구독, 서비스 안내(카테고리별), 상세 페이지, VS 비교, 커뮤니티, 검색, 캘린더",
        ],
        screens: [
          { src: "/images/goodock/slide-01.png", label: "프로젝트 커버" },
          { src: "/images/goodock/slide-02.png", label: "서비스 소개" },
          { src: "/images/goodock/slide-03.png", label: "Background" },
          { src: "/images/goodock/slide-04.png", label: "SWOT Analysis" },
          { src: "/images/goodock/slide-05.png", label: "Competitive Analysis" },
          { src: "/images/goodock/slide-06.png", label: "Positioning Map" },
          { src: "/images/goodock/slide-07.png", label: "Field Research" },
          { src: "/images/goodock/slide-08.png", label: "User Persona & Journey Map" },
          { src: "/images/goodock/slide-09.png", label: "Information Architecture / Design System" },
          { src: "/images/goodock/slide-10.png", label: "주요 화면" },
        ],
        result:
          "【주요 성과】\n• 구독 통합 관리, 카테고리별 비교(VS), 결제일 캘린더, 커뮤니티 등 핵심 기능을 중심으로 사용자 중심의 구독 관리 경험을 설계\n• 20~30대 약 50명 대상 필드 리서치를 통해 실 사용자 Pain Point를 도출하고, 이를 기능 설계에 직접 반영\n• 팀 리더로서 프로젝트 방향 설정, 역할 분배, 일정 관리를 수행하며 약 2개월간 팀을 리드\n\n【회고】\n• 다양한 구독 서비스의 정보를 통합하는 과정에서, 정보의 양과 사용자 피로도 사이의 균형을 잡는 것이 가장 큰 고민이었음. SWOT 분석에서 도출한 '과도한 정보 제공으로 인한 피로도'를 인지하고, 카테고리 분류와 VS 비교 기능으로 정보 접근성을 높이는 방향으로 해결\n• 퍼소나와 저니맵을 통해 사용자 시나리오를 구체화한 경험이 IA 설계와 화면 기획의 근거를 탄탄하게 만들어준 핵심 과정이었음\n• 실제 개발까지 이어지지 못한 점이 아쉬우며, 향후 프로토타입 테스트를 통해 사용성을 검증하는 단계까지 확장하고 싶음",
      },
      {
        id: "emoticon-recycle",
        title: "카카오 이모티콘 리사이클링 서비스 기획",
        summary:
          "사용하지 않는 카카오 이모티콘을 재활용하여 새로운 가치를 창출하는 신규 서비스를 기획했습니다.",
        period: "2024.06 - 2024.08",
        role: "서비스 기획 (기여도 100%)",
        team: "1인 프로젝트",
        tags: ["서비스 기획", "카카오", "리사이클링"],
        background:
          "국민 메신저 카카오톡의 월간 활성 이용자 수(MAU)는 약 4,500만 명이며, 성인 10명 중 9.5명이 이모티콘 구매 경험이 있습니다. 그러나 1인당 평균 보유 이모티콘 5.1개 중 44%는 구매 후 1년 이상 사용하지 못한 채 방치되고 있습니다. 유행에 따라 빠르게 구매하지만 관심도가 떨어지면 사용하지 않게 되는 '이모티콘 정크(Junk)' 현상이 Pain Point로 도출되었습니다.",
        process: [
          "데스크 리서치: 메신저 사용량과 이모티콘 사용 상관관계 분석, 이모티콘 시장 규모 및 소비 가치 조사",
          "온라인 설문: 이모티콘 구매/사용 경험, 보유 개수, 구매 주기, 사용하지 않는 이유 조사",
          "사용자 인터뷰: 4명의 실사용자(학생~직장인) 심층 인터뷰 — '유행 끝난 이모티콘으로 새 이모티콘을 사고 싶다', '안 쓰는 이모티콘을 팔고 싶다' 등 핵심 니즈 도출",
          "SWOT 분석: 높은 MAU 기반 시장 확보(S), 구매 후 환불 불가 정책(W), 고착화된 시장의 패러다임 전환 기회(O), 개인정보 규제 강화(T)",
          "포지셔닝 맵: 접근성-상품성 축에서 경쟁 서비스 대비 위치 분석",
          "리사이클링 정책 설계: 보유 기간별 초코(ⓒ) 지급 비율 (1년 미만 10%, 1~2년 7%, 2~3년 5%, 3년 이상 미지급), 사용 기한 1개월(15일 연장 최대 2회)",
          "AS-IS → TO-BE 설계: 기존 300ⓒ 구매 → 리사이클 리워드 활용 시 270ⓒ로 구매 가능, 구매 주기 6개월 → 2개월로 단축 효과 기대",
          "Key Value 도출: 소비자에게는 합리적 소비 만족감, 서비스 관리자에게는 추가 소비 유도",
        ],
        screens: [
          { src: "/images/emoticon-recycle/slide-01.png", label: "프로젝트 개요" },
          { src: "/images/emoticon-recycle/slide-02.png", label: "Overview" },
          { src: "/images/emoticon-recycle/slide-03.png", label: "Background" },
          { src: "/images/emoticon-recycle/slide-04.png", label: "Desk Research" },
          { src: "/images/emoticon-recycle/slide-05.png", label: "Market Analysis" },
          { src: "/images/emoticon-recycle/slide-06.png", label: "Positioning Map & Competitive Analysis" },
          { src: "/images/emoticon-recycle/slide-07.png", label: "Field Research - Online Survey / User Interview & Survey" },
          { src: "/images/emoticon-recycle/slide-08.png", label: "SWOT Analysis" },
          { src: "/images/emoticon-recycle/slide-09.png", label: "Insight & Pain Point / Solution" },
          { src: "/images/emoticon-recycle/slide-10.png", label: "Policy" },
          { src: "/images/emoticon-recycle/slide-11.png", label: "Key Value & AS-IS/TO-BE" },
        ],
        result:
          "【주요 성과】\n• 고착화된 이모티콘 시장에 '리사이클링'이라는 새로운 패러다임을 제안\n• 소비자(합리적 소비 만족감)와 서비스 관리자(추가 소비 유도) 양측의 가치를 모두 충족하는 서비스 구조 설계\n• 보유 기간별 리워드 정책, 사용 기한, AS-IS/TO-BE 비교 등 구체적인 비즈니스 로직까지 기획하여 서비스의 방향성을 제시\n• 4명의 실사용자 심층 인터뷰를 통해 정성적 데이터를 확보하고, 이를 Pain Point → Solution으로 직접 연결\n\n【회고】\n• 1인 프로젝트로 리서치부터 정책 설계까지 전 과정을 혼자 수행하면서, 기획자로서의 전체 프로세스를 체화할 수 있었음\n• 기존에 없던 서비스를 기획하다 보니 벤치마킹 대상이 제한적이었고, 카카오 이모티콘의 실제 운영 정책과 데이터에 접근하기 어려운 점이 가장 큰 한계였음. 공개된 리서치 자료와 사용자 인터뷰를 최대한 활용하여 근거를 보완\n• 리워드 정책의 수치(지급 비율, 사용 기한 등)는 가설 기반으로 설정한 것이므로, 실제 서비스 적용 시에는 A/B 테스트 등을 통한 검증이 필요할 것으로 판단",
      },
    ],
  },
  {
    id: "app-renewal",
    number: 2,
    title: "운영 App 리뉴얼 기획",
    subtitle: "사용성 개선을 위한 앱 전면 리뉴얼",
    description:
      "기존 앱의 사용성 문제를 분석하고, 개선된 UX와 새로운 기능을 포함한 리뉴얼을 기획했습니다.",
    tags: ["앱 리뉴얼", "UX 개선", "모바일"],
    items: [],
  },
  {
    id: "admin-feature",
    number: 3,
    title: "자사 어드민 기획",
    subtitle: "운영 효율화를 위한 어드민 기능 설계",
    description:
      "내부 운영팀의 업무 효율을 높이기 위해 어드민 시스템에 신규 기능과 페이지를 기획했습니다.",
    tags: ["어드민", "백오피스", "운영 효율화"],
    items: [],
  },
  {
    id: "alimtalk-operation",
    number: 4,
    title: "알림톡 운영 기획",
    subtitle: "카카오 알림톡 기반 설문 수집 및 리워드 시스템 설계",
    description:
      "알림톡을 활용하여 사용자에게 설문을 발송하고, 참여에 대한 리워드를 제공하는 시스템을 기획했습니다.",
    tags: ["알림톡", "설문", "리워드", "CRM"],
    items: [],
  },
  {
    id: "landing-page",
    number: 5,
    title: "랜딩페이지 기획",
    subtitle: "서비스 소개 및 전환을 위한 랜딩 경험 설계",
    description:
      "사용자 유입부터 전환까지의 흐름을 설계하고, 핵심 메시지 전달과 CTA 최적화를 위한 랜딩페이지를 기획했습니다.",
    tags: ["랜딩페이지", "전환율 최적화", "GFA"],
    items: [],
  },
];

export interface AutomationItem {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  problem: string;
  features: string[];
  screens: { src: string; label: string }[];
  result: string;
}

export const automations: AutomationItem[] = [
  {
    id: "ui-monitor",
    title: "UI 변경 모니터링 도구",
    summary:
      "자사 보유 사이트들의 UI 변경을 자동으로 감지하고 텔레그램으로 알림을 발송하는 모니터링 도구를 기획·구현했습니다.",
    tags: ["자동화", "모니터링", "Claude Code", "Telegram"],
    problem: "문제 정의를 작성해주세요.",
    features: [],
    screens: [],
    result: "성과를 작성해주세요.",
  },
  {
    id: "db-automation",
    title: "DB 자동화 신청 도구",
    summary:
      "DB 접수 기능을 자동으로 모니터링하고 처리하는 도구를 기획·구현했습니다.",
    tags: ["자동화", "DB", "Claude Code", "Telegram"],
    problem: "문제 정의를 작성해주세요.",
    features: [],
    screens: [],
    result: "성과를 작성해주세요.",
  },
  {
    id: "ai-chat",
    title: "AI Chat",
    summary:
      "업무 중 필요한 정보를 빠르게 얻기 위한 AI 채팅 도구를 기획·구현했습니다.",
    tags: ["AI", "Chat", "Claude Code"],
    problem: "문제 정의를 작성해주세요.",
    features: [],
    screens: [],
    result: "성과를 작성해주세요.",
  },
];
