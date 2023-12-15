import { default as ImgAppjam } from '@src/assets/images/img_appjam.jpg';
import { default as ImgEvent } from '@src/assets/images/img_event.jpg';
import { default as ImgIntroCard1 } from '@src/assets/images/img_intro_card1.png';
import { default as ImgIntroCard2 } from '@src/assets/images/img_intro_card2.png';
import { default as ImgIntroCard3 } from '@src/assets/images/img_intro_card3.png';
import { default as ImgMakersCard } from '@src/assets/images/img_main_makers_card.png';
import { default as ImgMindCard } from '@src/assets/images/img_main_mind_card.png';
import { default as ImgSeminar } from '@src/assets/images/img_seminar.jpg';
import { default as ImgSoptkaton } from '@src/assets/images/img_soptkaton.jpg';
import { default as ImgSoptterm } from '@src/assets/images/img_soptterm.jpg';
import { default as ImgStudy } from '@src/assets/images/img_study.jpg';
import { ActivityType, KeywordListType, PartListType } from '@src/lib/types/main';
import { Part, TextWeightType } from '@src/lib/types/universal';

export const FIRST_INTRO_CONTENT = 1;
export const LAST_INTRO_CONTENT = 3;

export const Activity: ActivityType[] = [
  {
    img: ImgAppjam.src,
    navKor: '앱잼',
    navEng: 'App jam',
    description: [
      { content: '3~5주간 ', color: 'yellow' },
      {
        content:
          '기획, 디자인, 개발 파트가 팀을 이뤄 하나의 웹 또는 앱 서비스를 제작하는 SOPT 내 장기 프로젝트예요. IT 창업을 위한 협업 과정을 경험하고, 최종 ',
        color: 'white',
      },
      { content: '데모데이 ', color: 'yellow' },
      { content: '에서 ', color: 'white' },
      { content: '각 파트 현직자들', color: 'yellow' },
      { content: '과 결과물을 공유하고 피드백을 받아요.', color: 'white' },
    ],
  },
  {
    img: ImgSoptkaton.src,
    navKor: '솝커톤',
    navEng: 'Sopkaton',
    description: [
      { content: '무박 2일 ', color: 'yellow' },
      {
        content: '간 기획, 디자인, 개발 파트가 팀을 이뤄 최소 단위의 서비스를 제작하는 SOPT내 ',
        color: 'white',
      },
      { content: '단기 프로젝트', color: 'yellow' },
      {
        content:
          '예요. 앱잼에 앞서 팀 단위의 협업 과정을 빠르게 경험하며, IT 프로젝트에 대한 협업 감각을 익힐 수 있어요.',
        color: 'white',
      },
    ],
  },
  {
    img: ImgSoptterm.src,
    navKor: '솝텀',
    navEng: 'Sopt-term',
    description: [
      { content: 'SOPT를 ', color: 'white' },
      {
        content: '한 기수 이상 수료한 회원',
        color: 'yellow',
      },
      {
        content:
          '끼리 모여 자유로운 주제로 IT 프로젝트를 진행해요. SOPT에서 쌓은 실력을 기반으로 보다 ',
        color: 'white',
      },
      { content: '자율적인 프로젝트', color: 'yellow' },
      { content: '를 진행할 수 있어요.', color: 'white' },
    ],
  },
  {
    img: ImgSeminar.src,
    navKor: '정기 세미나',
    navEng: 'Seminar',
    description: [
      { content: '활동 기간 동안 ', color: 'white' },
      { content: '총 8회의 파트별 세미나', color: 'yellow' },
      {
        content:
          '를 통해 각자 자신의 파트에서 실력을 다져요. 각 파트장의 강연, 파트원간의 지식 공유, 외부 연사 초정 등 다양한 유형의 세미나가 진행돼요.',
        color: 'white',
      },
    ],
  },
  {
    img: ImgStudy.src,
    navKor: '스터디',
    navEng: 'Study',
    description: [
      { content: '각 파트의 실력을 심도있게 다질 수 있는 ', color: 'white' },
      { content: '스터디와 다양한 파트원들과 친목을 쌓을 수 있는 네트워킹', color: 'yellow' },
      {
        content: '이 열려요. 자율적으로 참여하며 SOPT 활동을 더욱 유익하게 만들어 나갈 수 있어요.',
        color: 'white',
      },
    ],
  },
  {
    img: ImgEvent.src,
    navKor: '행사',
    navEng: 'Events',
    description: [
      { content: '운영팀', color: 'yellow' },
      { content: '에서는 SOPT 회원들의 원활한 ', color: 'white' },
      { content: '네트워킹', color: 'yellow' },
      { content: '을 위한 다양한 행사를 기획해요. ', color: 'white' },
      { content: '미디어팀', color: 'yellow' },
      { content: '에서는 SOPT의 활동과 관련된 ', color: 'white' },
      { content: '콘텐츠를 제작', color: 'yellow' },
      {
        content: '하여 SOPT를 대내외적으로 알려요.',
        color: 'white',
      },
    ],
  },
];

export const INTRO_CONTENT_LIST = [
  {
    id: 1,
    title: '열정이 이끄는\n최고 수준의 몰입',
    detail:
      '열정 하나로 뭉친 SOPT는 끊임 없이 집중하며 성장합니다.\n언제나 어떤 일에 대해서든 최고 수준의 몰입을 유지합니다.',
    src: ImgIntroCard1.src,
  },
  {
    id: 2,
    title: '가진 것은 무엇이든\n나누는 문화',
    detail:
      'SOPT에서는 모두가 자신의 지식과 경험을\n적극적으로 나눕니다. 이를 통해 다양한 관점에서\n세상의 문제를 해결할 수 있습니다.',
    src: ImgIntroCard2.src,
  },
  {
    id: 3,
    title: '함께이기 때문에\n가능한 도전',
    detail:
      '200여 명의 활동 회원, 3000여 명의 명예 회원들과 함께이기에\n그 어떤 목표에도 용기 내어 도전할 수 있습니다.',
    src: ImgIntroCard3.src,
  },
];

export const partList: PartListType = {
  [Part.PLAN]: {
    value: 'Plan',
    label: '기획',
    description: [
      { content: '린스타트업에 기초', weight: 'bold' },
      {
        content: '하여 고객 시장 분석 - 문제정의 - 가설 검증 - 솔루션/BM 도출- 전략 수립까지 ',
        weight: 'normal',
      },
      { content: 'IT 프로덕트를 기획', weight: 'bold' },
      { content: '하고 ', weight: 'normal' },
      { content: '매니징하는 전과정을 경험', weight: 'bold' },
      { content: '합니다.', weight: 'normal' },
    ],
  },
  [Part.DESIGN]: {
    value: 'Design',
    label: '디자인',
    description: [
      { content: '피그마와 같은 협업툴', weight: 'bold' },
      { content: '을 통해 ', weight: 'normal' },
      { content: 'UX/UI 디자인의 전반적인 과정', weight: 'bold' },
      { content: '을 배우고 기획자, 개발자와 함께 ', weight: 'normal' },
      { content: '새로운 프로덕트', weight: 'bold' },
      { content: '를 만들어 내는 과정에 참여합니다.', weight: 'normal' },
    ],
  },
  [Part.ANDROID]: {
    value: 'Android',
    label: '안드로이드',
    description: [
      { content: 'Kotlin 언어를 활용', weight: 'bold' },
      { content: '해 안드로이드 ', weight: 'normal' },
      { content: 'UI 구현 기초/심화', weight: 'bold' },
      { content: '부터 ', weight: 'normal' },
      { content: '서버 통신 ', weight: 'bold' },
      {
        content: '등 앱 제작에 필요한 내용들을 배웁니다. 안드로이드에 몰입할 수 있는 세미나, ',
        weight: 'normal',
      },
      { content: '페어 프로그래밍', weight: 'bold' },
      { content: '을 통한 실습, 스터디, 합동세미나 등 여러 활동에 참여합니다.', weight: 'normal' },
    ],
  },
  [Part.IOS]: {
    value: 'iOS',
    label: 'iOS',
    description: [
      { content: 'Swift와 UI Kit', weight: 'bold' },
      { content: '를 이용해서 ', weight: 'normal' },
      { content: 'iOS 앱 서비스', weight: 'bold' },
      {
        content: '를 만들 수 있는 능력을 기를 수 있습니다. iOS가 처음인 분들을 위한',
        weight: 'normal',
      },
      { content: '왕초보 스터디', weight: 'bold' },
      { content: '와 ', weight: 'normal' },
      { content: '보충 세미나', weight: 'bold' },
      { content: ', 그리고 실력적 도약을 위한 ', weight: 'normal' },
      { content: '심화 세미나', weight: 'bold' },
      {
        content:
          '까지. 자신의 성장을 위해 열정적으로 도전하는 사람들과 함께 활동에 필요한 부분들을 학습할 수 있습니다.',
        weight: 'normal',
      },
    ],
  },
  [Part.WEB]: {
    value: 'Web',
    label: '웹',
    description: [
      { content: 'UI 구현, 서버 통신 등 ', weight: 'normal' },
      { content: '웹 서비스 개발', weight: 'bold' },
      { content: '에 필요한 역량들을 ', weight: 'normal' },
      { content: '기초부터 심화까지 ', weight: 'bold' },
      {
        content:
          '학습합니다. 또한 기획자, 디자이너, 서버 개발자와의 협업 경험을 통해 개발 협업 방식을 익힐 수 있습니다.',
        weight: 'normal',
      },
    ],
  },
  [Part.SERVER]: {
    value: 'Server',
    label: '서버',
    description: [
      { content: 'Spring 프레임 워크', weight: 'bold' },
      { content: ', ', weight: 'normal' },
      { content: '관계형 데이터베이스', weight: 'bold' },
      {
        content: '와',
        weight: 'normal',
      },
      { content: 'AWS를 기반', weight: 'bold' },
      { content: '으로 ', weight: 'normal' },
      { content: '서버 애플리케이션을 구축', weight: 'bold' },
      {
        content:
          '하고 운영하는 과정을 학습합니다. 또한 세미나, 코드리뷰, 스터디를 통해 개발 실력을 증진시키고, 기획자, 디자이너, 클라이언트 개발자와의 협업을 통해 협업 방식을 익힐 수 있습니다.',
        weight: 'normal',
      },
    ],
  },
};

const yellowStyle = {
  backgroundColor: '#FFB800',
  color: '#1B2136',
};

const blueStyle = {
  backgroundColor: 'rgba(64, 106, 255, 0.70)',
  color: '#fff',
};

const indigoStyle = {
  backgroundColor: 'rgba(27, 33, 54, 0.70)',
  color: '#fff',
};

const skyStyle = {
  backgroundColor: '#65D1FF',
  color: '#1B2136',
};

const greenStyle = {
  backgroundColor: '#9FFF40',
  color: '#1B2136',
};

export const keywordList: KeywordListType = {
  [Part.PLAN]: [
    {
      content: '린스타트업 기초',
      ...yellowStyle,
      desktop: { top: '92.97px', right: '11.34vw' },
      tablet: { top: '258px', right: '8.59vw' },
      mobile: { top: '148px', right: '10.74vw' },
    },
    {
      content: 'IT 프로덕트 기획',
      ...indigoStyle,
      desktop: { top: '157.13px', right: '18.39vw' },
      tablet: { top: '297px', right: '29.03vw' },
      mobile: { top: '177px', right: '27.1vw' },
    },
    {
      content: '전반적인 매니징',
      ...blueStyle,
      desktop: { top: '282.28px', right: '12.55vw' },
      tablet: { top: '383px', right: '11.06vw' },
      mobile: { top: '223px', right: '12.86vw' },
    },
  ],
  [Part.DESIGN]: [
    {
      content: '피그마와 같은 협업툴',
      ...skyStyle,
      desktop: { top: '92.97px', right: '9.15vw' },
      tablet: { top: '259px', right: '5.72vw' },
      mobile: { top: '149.28px', right: '5.98vw' },
    },
    {
      content: 'UX/UI 전반적 과정',
      ...indigoStyle,
      desktop: { top: '157.13px', right: '17.09vw' },
      tablet: { top: '306px', right: '20.18vw' },
      mobile: { top: '176.14px', right: '20.9vw' },
    },
    {
      content: '새로운 프로덕트',
      ...blueStyle,
      desktop: { top: '282.28px', right: '12.55vw' },
      tablet: { top: '386px', right: '11.97vw' },
      mobile: { top: '222.02px', right: '12.38vw' },
    },
  ],
  [Part.ANDROID]: [
    {
      content: 'UI 구현 기초/심화',
      ...yellowStyle,
      desktop: { top: '117.6px', right: '6.16vw' },
      tablet: { top: '303px', right: '6.38vw' },
      mobile: { top: '175px', right: '6.07vw' },
    },
    {
      content: 'Kotlin 언어 활용',
      ...indigoStyle,
      desktop: { top: '96px', right: 'calc(115px + 10vw)' },
      tablet: { top: '287px', right: 'calc(110px + 10.15vw)' },
      mobile: { top: '163px', right: 'calc(50px + 14.06vw)' },
    },
    {
      content: '서버 통신',
      ...blueStyle,
      desktop: { top: '232px', right: '7.34vw' },
      tablet: { top: '373px', right: '8.85vw' },
      mobile: { top: '218px', right: '10.74vw' },
    },
    {
      content: '페어 프로그래밍',
      ...greenStyle,
      desktop: { top: '278.38px', right: 'calc(50px + 10vw)' },
      tablet: { top: '379px', right: '28.77vw' },
      mobile: { top: '225px', right: '29.43vw' },
    },
  ],
  [Part.IOS]: [
    {
      content: 'iOS 앱 서비스',
      ...indigoStyle,
      desktop: { top: '82.31px', right: 'calc(102px + 10vw)' },
      tablet: { top: '305px', right: 'calc(100px + 9.11vw)' },
      mobile: { top: '178px', right: 'calc(50px + 12vw)' },
    },
    {
      content: 'Swift와 UI Kit',
      ...yellowStyle,
      desktop: { top: '117.6px', right: '6.72vw' },
      tablet: { top: '324px', right: '6.38vw' },
      mobile: { top: '188px', right: '6.07vw' },
    },
    {
      content: '보충 및 심화 세미나',
      backgroundColor: '#D65438',
      color: '#fff',
      desktop: { top: '223.74px', right: 'calc(33px + 5vw)' },
      tablet: { top: '400px', right: '16.79vw' },
      mobile: { top: '235px', right: '15.42vw' },
    },
    {
      content: '왕초보 스터디',
      ...blueStyle,
      desktop: { top: '275.88px', right: '19.02vw' },
      tablet: { top: '360px', right: '39.97vw' },
      mobile: { top: '212px', right: '38.78vw' },
    },
  ],
  [Part.WEB]: [
    {
      content: '웹 서비스 개발',
      ...yellowStyle,
      desktop: { top: '92.97px', right: '12.06vw' },
      tablet: { top: '262px', right: '10.93vw' },
      mobile: { top: '158px', right: '13.08vw' },
    },
    {
      content: '기초부터 심화까지',
      ...indigoStyle,
      desktop: { top: '157.13px', right: '17.66vw' },
      tablet: { top: '314px', right: '27.47vw' },
      mobile: { top: '188px', right: '29vw' },
    },
    {
      content: 'UI구현과 서버 통신',
      ...skyStyle,
      desktop: { top: '282.28px', right: '11.25vw' },
      tablet: { top: '382px', right: '8.33vw' },
      mobile: { top: '228px', right: '10.74vw' },
    },
  ],
  [Part.SERVER]: [
    {
      content: '서버 애플리케이션 구축',
      ...greenStyle,
      desktop: { top: '92.97px', right: '8.16vw' },
      tablet: { top: '301px', right: '12.10vw' },
      mobile: { top: '178px', right: '15.42vw' },
    },
    {
      content: '관계형 데이터베이스',
      ...indigoStyle,
      desktop: { top: '157.13px', right: 'calc(30px + 3.69vw)' },
      tablet: { top: '346px', right: '5.2vw' },
      mobile: { top: '203px', right: '8.4vw' },
    },
    {
      content: 'AWS 기반',
      ...skyStyle,
      desktop: { top: '192px', right: 'calc(110px + 15.1vw)' },
      tablet: { top: '323px', right: 'calc(110px + 28vw)' },
      mobile: { top: '196px', right: '45.79vw' },
    },
    {
      content: 'Spring 프레임 워크',
      ...blueStyle,
      desktop: { top: '282.28px', right: '10.83vw' },
      tablet: { top: '389px', right: '25vw' },
      mobile: { top: '235px', right: '25.7vw' },
    },
  ],
};

export const OWN_ORGANIZATION_LIST: {
  nameKor: string;
  nameEng: string;
  description: TextWeightType[];
  frontSideBg: string;
  backSideBg: string;
}[] = [
  {
    nameKor: '메이커스',
    nameEng: 'Makers',
    description: [
      { content: 'SOPT를 한 기수 이상 수료한 사람들이 모여 ', weight: 'normal' },
      { content: 'SOPT에 필요한 프로덕트를 만드는 정식 기구', weight: 'bold' },
      {
        content:
          '입니다. 3천여 명의 구성원들을 연결하고 새로운 가치를 제공하기 위한 방법을 끊임없이 고민해요. ',
        weight: 'normal',
      },
      { content: '앞으로도 SOPT를 지속적으로 운영하고자, ', weight: 'bold' },
      {
        content:
          '어떻게 하면 우리의 활동이 더 즐거울 수 있을지, 대내외적으로 잘 알릴 수 있을지 고민할 거예요. ',
        weight: 'normal',
      },
    ],
    frontSideBg: ImgMakersCard.src,
    backSideBg: '#FF7C53',
  },
  {
    nameKor: '마인드',
    nameEng: 'Mind',
    description: [
      { content: 'SOPT MIND는 SOPT 내외에 ', weight: 'normal' },
      { content: '기업가정신과 창업도전 문화 확산 목적', weight: 'bold' },
      {
        content:
          '으로 설립된 기구입니다. 매 기수 SOPT 앱잼 팀이 더 적극적이고 똑똑하게 창업에 도전할 수 있도록 필요한 컨텐츠와 시스템을 고민하고 있어요. ',
        weight: 'normal',
      },
      {
        content:
          'SOPT가 창업동아리임을 잊지 않도록, 그리고 전국에 열정으로 도전하는 SOPT의 MIND가 널리 공유되도록 ',
        weight: 'bold',
      },
      { content: 'MIND도 도전하겠습니다.', weight: 'normal' },
    ],
    frontSideBg: ImgMindCard.src,
    backSideBg: '#F66FF8',
  },
];