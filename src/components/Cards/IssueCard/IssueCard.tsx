import { IssueCardContainer, IssueCardHeader } from "./styles";

interface IssueCardProps {
  title: string;
  created_at: string;
  body: string;
}

export const IssueCard = ({
  title,
  created_at,
  body,
}: IssueCardProps): JSX.Element => {
  return (
    <IssueCardContainer>
      <IssueCardHeader>
        <h3>{title}</h3>
        <span>{created_at}</span>
      </IssueCardHeader>
      <p>{body}</p>
    </IssueCardContainer>
  );
};
