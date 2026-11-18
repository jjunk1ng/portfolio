export interface Project {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  period: string;
  tags: string[];
  sections: {
    title: string;
    content: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "landing-page",
    number: 1,
    title: "랜딩페이지 및 랜딩사이트 내 특정 페이지 기획",
    subtitle: "서비스 소개 및 전환을 위한 랜딩 경험 설계",
    description:
      "사용자 유입부터 전환까지의 흐름을 설계하고, 핵심 메시지 전달과 CTA 최적화를 위한 랜딩페이지를 기획했습니다.",
    role: "서비스 기획",
    period: "YYYY.MM - YYYY.MM",
    tags: ["랜딩페이지", "전환율 최적화", "UX 기획"],
    sections: [
      {
        title: "배경 및 목표",
        content: "프로젝트 배경과 목표를 작성해주세요.",
      },
      {
        title: "기획 과정",
        content: "IA, 와이어프레임, 플로우차트 등 기획 과정을 작성해주세요.",
      },
      {
        title: "주요 화면",
        content: "주요 화면 스크린샷과 설명을 추가해주세요.",
      },
      {
        title: "성과 및 회고",
        content: "정량적/정성적 성과와 배운 점을 작성해주세요.",
      },
    ],
  },
  {
    id: "admin-feature",
    number: 2,
    title: "자사 어드민 내 신규 기능 및 페이지 기획",
    subtitle: "운영 효율화를 위한 어드민 기능 설계",
    description:
      "내부 운영팀의 업무 효율을 높이기 위해 어드민 시스템에 신규 기능과 페이지를 기획했습니다.",
    role: "서비스 기획",
    period: "YYYY.MM - YYYY.MM",
    tags: ["어드민", "백오피스", "운영 효율화"],
    sections: [
      {
        title: "배경 및 목표",
        content: "프로젝트 배경과 목표를 작성해주세요.",
      },
      {
        title: "기획 과정",
        content: "IA, 와이어프레임, 플로우차트 등 기획 과정을 작성해주세요.",
      },
      {
        title: "주요 화면",
        content: "주요 화면 스크린샷과 설명을 추가해주세요.",
      },
      {
        title: "성과 및 회고",
        content: "정량적/정성적 성과와 배운 점을 작성해주세요.",
      },
    ],
  },
  {
    id: "naver-gfa",
    number: 3,
    title: "네이버 광고(GFA) 페이지 기획",
    subtitle: "광고 성과 극대화를 위한 랜딩 설계",
    description:
      "네이버 GFA 광고 집행을 위한 랜딩페이지를 기획하고, 광고 소재와 연계된 사용자 경험을 설계했습니다.",
    role: "서비스 기획",
    period: "YYYY.MM - YYYY.MM",
    tags: ["GFA", "네이버 광고", "퍼포먼스 마케팅"],
    sections: [
      {
        title: "배경 및 목표",
        content: "프로젝트 배경과 목표를 작성해주세요.",
      },
      {
        title: "기획 과정",
        content: "IA, 와이어프레임, 플로우차트 등 기획 과정을 작성해주세요.",
      },
      {
        title: "주요 화면",
        content: "주요 화면 스크린샷과 설명을 추가해주세요.",
      },
      {
        title: "성과 및 회고",
        content: "정량적/정성적 성과와 배운 점을 작성해주세요.",
      },
    ],
  },
  {
    id: "app-renewal",
    number: 4,
    title: "자사 운영 App 리뉴얼 기획",
    subtitle: "사용성 개선을 위한 앱 전면 리뉴얼",
    description:
      "기존 앱의 사용성 문제를 분석하고, 개선된 UX와 새로운 기능을 포함한 리뉴얼을 기획했습니다.",
    role: "서비스 기획",
    period: "YYYY.MM - YYYY.MM",
    tags: ["앱 리뉴얼", "UX 개선", "모바일"],
    sections: [
      {
        title: "배경 및 목표",
        content: "프로젝트 배경과 목표를 작성해주세요.",
      },
      {
        title: "기획 과정",
        content: "IA, 와이어프레임, 플로우차트 등 기획 과정을 작성해주세요.",
      },
      {
        title: "주요 화면",
        content: "주요 화면 스크린샷과 설명을 추가해주세요.",
      },
      {
        title: "성과 및 회고",
        content: "정량적/정성적 성과와 배운 점을 작성해주세요.",
      },
    ],
  },
  {
    id: "survey-reward",
    number: 5,
    title: "알림톡을 통한 설문 및 리워드 기획",
    subtitle: "카카오 알림톡 기반 설문 수집 시스템 설계",
    description:
      "알림톡을 활용하여 사용자에게 설문을 발송하고, 참여에 대한 리워드를 제공하는 시스템을 기획했습니다.",
    role: "서비스 기획",
    period: "YYYY.MM - YYYY.MM",
    tags: ["알림톡", "설문", "리워드", "CRM"],
    sections: [
      {
        title: "배경 및 목표",
        content: "프로젝트 배경과 목표를 작성해주세요.",
      },
      {
        title: "기획 과정",
        content: "IA, 와이어프레임, 플로우차트 등 기획 과정을 작성해주세요.",
      },
      {
        title: "주요 화면",
        content: "주요 화면 스크린샷과 설명을 추가해주세요.",
      },
      {
        title: "성과 및 회고",
        content: "정량적/정성적 성과와 배운 점을 작성해주세요.",
      },
    ],
  },
];
