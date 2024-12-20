import { Meta, StoryObj } from '@storybook/react';
import Chatroom from '@/pages/result/panel/Chatroom';
import { IChatroom } from '@/types/IChatroom';
import Layout from '@/layouts/Layout';

const meta: Meta = {
  title: 'result/Chatroom',
  component: Chatroom,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const common = [
  { id: 1, message: '안녕! 잘 지내?', sender: '나' },
  { id: 2, message: '안녕! 오랜만이야. 잘 지내고 있어.', sender: '친구' },
  { id: 3, message: '요즘은 뭐 하고 지내?', sender: '나' },
  { id: 4, message: '회사 다니면서 이것저것 배우고 있어.', sender: '친구' },
  { id: 5, message: '와, 멋지다! 바쁘겠네.', sender: '나' },
  { id: 6, message: '응, 그래도 재밌어. 너는 요즘 어때?', sender: '친구' },
  {
    id: 7,
    message: '나도 잘 지내! 요즘은 프로젝트 하나 진행 중이야.',
    sender: '나',
  },
  { id: 8, message: '오, 대단한데? 어떤 프로젝트야?', sender: '친구' },
  { id: 9, message: 'AI 관련된 거야. 너도 관심 있을 것 같아.', sender: '나' },
  {
    id: 10,
    message: '그렇구나! 나중에 시간 되면 설명 좀 해줘.',
    sender: '친구',
  },
  { id: 11, message: '당연하지! 시간 될 때 만나자.', sender: '나' },
  { id: 12, message: '좋아. 이번 주 주말 어때?', sender: '친구' },
  { id: 13, message: '딱 좋네! 어디서 만날까?', sender: '나' },
  { id: 14, message: '우리 자주 가던 카페 어때?', sender: '친구' },
  { id: 15, message: '좋아! 그럼 토요일 오후에 보자.', sender: '나' },
  { id: 16, message: '응, 그때 보자! 기대돼.', sender: '친구' },
  { id: 17, message: '나도! 그럼 토요일에 봐!', sender: '나' },
  { id: 18, message: '알겠어! 잘 지내~', sender: '친구' },
  { id: 19, message: '너도 잘 지내!', sender: '나' },
];

const cyberbullyingData = [
  { id: 1, message: '얘 또 왔네 ㅋㅋㅋ', sender: '유저1' },
  { id: 2, message: 'ㅋㅋㅋ 왜 이렇게 눈치 없냐?', sender: '유저2' },
  { id: 3, message: '뭐가 눈치 없어? 난 내 글 쓰는 건데?', sender: '나' },
  { id: 4, message: '니 글이 웃기잖아 ㅋㅋㅋ 수준 실화냐?', sender: '유저3' },
  { id: 5, message: 'ㅋㅋ 또 찐 따위 주제에 글 쓴다', sender: '유저4' },
  {
    id: 6,
    message: '찐따는 무슨 ㅋㅋ 나 그냥 쓰고 싶은 대로 쓰는 건데.',
    sender: '나',
  },
  { id: 7, message: 'ㄹㅇ 고집은 있어가지고 ㅋㅋㅋ', sender: '유저2' },
  {
    id: 8,
    message: '아 이 맛에 글 본다니까. 자꾸 해봐 ㅋㅋ',
    sender: '유저1',
  },
  {
    id: 9,
    message: '제발 니 주제 파악 좀 하고 조용히 해라.',
    sender: '유저3',
  },
  { id: 10, message: '니가 뭔데 나한테 주제 파악하라 마라야?', sender: '나' },
  { id: 11, message: 'ㅋㅋㅋ 불쌍하다 진짜', sender: '유저4' },
  { id: 12, message: '불쌍한 게 아니라 그냥 민폐임 ㅋㅋ', sender: '유저1' },
  {
    id: 13,
    message: '아 좀 그만들 하지? 내가 너네한테 뭘 잘못했는데.',
    sender: '나',
  },
  {
    id: 14,
    message: '우리한텐 잘못 없지. 걍 다들 싫어할 뿐.',
    sender: '유저2',
  },
  { id: 15, message: 'ㅇㅈ ㅋㅋ 너는 문제 덩어리임', sender: '유저3' },
  {
    id: 16,
    message: '차단이라도 하던가 하지 뭐 이렇게 달려드는 건데.',
    sender: '나',
  },
  {
    id: 17,
    message: 'ㅋㅋ 차단하면 재미 없잖아. 니가 뻘짓하는 게 꿀잼인데.',
    sender: '유저4',
  },
];

export const Common: Story = {
  args: {
    messageData: common,
    isBulling: false,
  },
};

export const Bulling: Story = {
  args: {
    messageData: cyberbullyingData,
    isBulling: true,
  },
};
