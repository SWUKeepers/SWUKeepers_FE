import Layout from '@/layouts/Layout';

const mockData = {
  isBulling: false,
  messageData: [
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
  ],
};

const Result = () => {
  return (
    <Layout>
      <div>Result</div>
    </Layout>
  );
};

export default Result;
