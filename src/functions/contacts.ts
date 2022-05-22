import useSWR from 'swr'
import { API_BASE_URL } from 'settings'
import { Contact } from 'types/contact'

export function useContacts() {
  const { data, error } = useSWR<Contact[]>(`${API_BASE_URL}/users`, async (url) => (await fetch(url)).json())

  const loading = !data && !error

  const contacts: Contact[] = data?.map((item) => ({
    ...item,
    avatar: `https://avatars.dicebear.com/v2/avataaars/${item.username}.svg?background=%23f5f5f5&mood[]=happy`
  })) ?? []

  return {
    loading,
    contacts,
    error
  }
}
