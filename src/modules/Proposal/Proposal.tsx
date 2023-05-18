import SectionDescription from '../../components/SectionDescription/SectionDescription';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import style from './Proposal.module.scss';
import { ProposalText } from './ProposalText';
import Form from './modules/Form/Form';

const Proposal = () => {
  return (
    <section id='subaproposal' className={style.proposal}>
      <div className='container'>
        <SectionTitle className={style.proposal__title}>
          {ProposalText.title}
        </SectionTitle>
        <SectionDescription className={style.proposal__description}>
          {ProposalText.description}
        </SectionDescription>
        <Form className={style.proposalForm} />
      </div>
    </section>
  );
};

export default Proposal;
