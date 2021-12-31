//API URL
const apiUrl = 'https://eu.ui-avatars.com/api/';
//API CONFIGURATION
const avatarConfig = {
  size: '40',
  background: '3498db',
  fontColor: 'ffffff',
  rounded: true,
};
//AVATAR GENERATOR
export default function avatar(firstName, lastName) {
  return `${apiUrl}?size=${avatarConfig.size}&rounded=${avatarConfig.rounded}&background=${avatarConfig.background}&color=${avatarConfig.fontColor}&name=${firstName}+${lastName}`;
}
