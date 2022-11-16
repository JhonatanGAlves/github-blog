import { Badge, IssueCardContainer, IssueCardHeader, Status } from "./styles";
import { formatDistanceToNow } from "date-fns";
import enUS from "date-fns/locale/en-US";

interface IssueCardProps {
  title: string;
  created_at: string;
  body: string;
  state: string;
}

export const IssueCard = ({
  title,
  created_at,
  body,
  state,
}: IssueCardProps): JSX.Element => {
  const createdAtDateRelativeToNow = formatDistanceToNow(new Date(created_at), {
    locale: enUS,
    addSuffix: true,
  });

  return (
    <IssueCardContainer>
      <IssueCardHeader>
        <h3>{title}</h3>
        <Status>
          <span>{createdAtDateRelativeToNow}</span>
          <Badge isOpen={state === "open"}>{state}</Badge>
        </Status>
      </IssueCardHeader>
      <p>{body}</p>
    </IssueCardContainer>
  );
};
