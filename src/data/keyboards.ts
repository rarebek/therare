export interface Keyboard {
  name: string
  switch: string
  desc: string
  status: string
}

export const keyboards: Keyboard[] = [
  {
    name: '1st Player Neo87',
    switch: 'Rome',
    desc: 'The latest addition. A refined typing experience with a distinct sound profile.',
    status: 'Current',
  },
  {
    name: 'Aula F75',
    switch: 'Leobog Reaper',
    desc: 'A solid daily driver with excellent tactile feedback and a compact layout.',
    status: 'Previous',
  },
  {
    name: 'Keychron K8 Pro',
    switch: 'Red',
    desc: 'Where it all started. A reliable, customizable board that introduced me to the hobby.',
    status: 'First',
  },
]
