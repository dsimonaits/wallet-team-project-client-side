import { TeamButton } from './DevButton.styled';

export default function DevButton({ onClick }) {
  return (
    <TeamButton onClick={onClick} type="button">
      Dev
    </TeamButton>
  );
}
