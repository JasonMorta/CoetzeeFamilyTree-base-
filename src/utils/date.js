export function formatLifeRange(birthDate, deathDate) {
  const birth = birthDate || '—';
  const death = deathDate || 'Present';
  return `${birth} - ${death}`;
}
