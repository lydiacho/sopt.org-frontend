import styled from '@emotion/styled';
import { useState } from 'react';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import QuestionBox from '@src/views/FAQPage/components/faq/QuestionBox';
import TabBar from '../common/Tabs';
import { SectionSubTitle, SectionTitle } from '../common/styles';
import { faqMap } from './constant';

const FaqInfo = () => {
  const [selectedTab, setSelectedTab] = useState<ExtraPart>(PartExtraType.ALL);
  const [status, setStatus] = useState(new Set());

  const toggleBox = (index: number) => {
    const updatedStatus = new Set(status);
    status.has(index) ? updatedStatus.delete(index) : updatedStatus.add(index);
    setStatus(updatedStatus);
  };

  return (
    <W>
      <Wrapper>
        <SectionTitle>FAQ</SectionTitle>
        <SectionSubTitle>자주 묻는 질문</SectionSubTitle>
      </Wrapper>
      <TabBar type="with-all" onTabClick={setSelectedTab} selectedTab={selectedTab} />
      {faqMap[selectedTab].map((info, index) => (
        <div key={index} onClick={() => toggleBox(index)}>
          <QuestionBox info={info} status={status.has(index)} />
        </div>
      ))}
    </W>
  );
};

const W = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 20px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 2px;
  }
`;

export default FaqInfo;
