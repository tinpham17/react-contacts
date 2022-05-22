import { render, screen } from '@testing-library/react'
import { ContactCard, ContactCardProps } from './ContactCard'

const props: ContactCardProps = {
  item: {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618'
      }
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    },
    avatar: 'https://avatars.dicebear.com/v2/avataaars/Antonette.svg'
  }
}

test('renders avatar and info fields', () => {
  render(<ContactCard item={props.item} />)

  expect(screen.getByAltText('avatar')).toBeInTheDocument()
  expect(screen.getByAltText('avatar')).toHaveAttribute('src', props.item.avatar)

  expect(screen.getByRole('name')).toBeInTheDocument()
  expect(screen.getByRole('name')).toHaveTextContent(props.item.name)

  expect(screen.getByRole('email')).toBeInTheDocument()
  expect(screen.getByRole('email')).toHaveTextContent(props.item.email)

  expect(screen.getByRole('phone')).toBeInTheDocument()
  expect(screen.getByRole('phone')).toHaveTextContent(props.item.phone)

  expect(screen.getByRole('website')).toBeInTheDocument()
  expect(screen.getByRole('website')).toHaveTextContent(props.item.website)
})

test('renders actions', () => {
  render(<ContactCard item={props.item} />)
  expect(screen.getByTestId('action-like')).toBeInTheDocument()
  expect(screen.getByTestId('action-edit')).toBeInTheDocument()
  expect(screen.getByTestId('action-delete')).toBeInTheDocument()
})
