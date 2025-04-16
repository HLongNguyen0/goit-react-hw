import {
  ProfileBox,
  ProfileDescription,
  ProfileImg,
  ProfileStats,
} from "./Profile.styled";

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats,
}: InitValues) {
  return (
    <ProfileBox>
      <ProfileDescription>
        <ProfileImg src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </ProfileDescription>

      <ProfileStats>
        <li>
          <span>Followers: </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{stats.likes}</span>
        </li>
      </ProfileStats>
    </ProfileBox>
  );
}

interface InitValues {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}
