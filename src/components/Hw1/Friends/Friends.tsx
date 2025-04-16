import { FriendListBox, FriendListElem } from "./Friends.styled";

export default function Friends({ friends }: InintValues) {
  return (
    <FriendListBox>
      {friends.map((friend) => {
        return (
          <FriendListElem key={friend.id} status={friend.isOnline}>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </FriendListElem>
        );
      })}
    </FriendListBox>
  );
}

interface InintValues {
  friends: {
    avatar: string;
    name: string;
    isOnline: boolean;
    id: number;
  }[];
}
