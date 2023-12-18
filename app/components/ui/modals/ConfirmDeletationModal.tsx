import { animationClass } from '@/app/helpers/universalFunctions';
import ModalContainer from './ModalContainer';
import PrimaryButton from '../buttons/PrimaryButton';

interface ConfirmDeletationModalProps {
  subject: string;
  isVisible: boolean;
  SetState: React.Dispatch<
    React.SetStateAction<{ isVisible: boolean; delete: boolean; appointmentId: string }>
  >;
  submit: (event: React.FormEvent<Element>) => void;
}

const ConfirmDeletationModal: React.FC<ConfirmDeletationModalProps> = ({
  subject,
  SetState,
  isVisible,
  submit,
}) => {
  const onClose = () => {
    SetState((prevState: any) => ({ ...prevState, isVisible: false }));
  };

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <div
        className={`bg-white rounded-lg p-4 md:p-8 transition-all transform ${animationClass(
          isVisible,
        )} shadow-lg`}
        onClick={onClose}
      >
        <div className='font-sans text-sm md:text-base text-gray-700 leading-6 tracking-wide mb-4'>
          {`Da li ste sigurni da želite obrisati ${subject}`}
        </div>
        <div className='flex justify-end'>
          <PrimaryButton onClick={onClose} buttonText='Zatvori' type='submit' />
          <PrimaryButton onClick={submit} buttonText='Obriši' type='delete' />
        </div>
      </div>
    </ModalContainer>
  );
};

export default ConfirmDeletationModal;
