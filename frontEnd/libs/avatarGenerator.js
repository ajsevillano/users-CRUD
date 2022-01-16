export default function avatar(fullName) {
  const finalName = fullName.map((initial) => initial[0].toUpperCase());
  return finalName[0] + finalName[1];
}
