import { Session } from '@supabase/gotrue-js'

import { createContext, FunctionComponent, useContext, useEffect, useRef, useState } from 'react'
import { supabase } from './supabaseClient'

const SessionContext = createContext<Session | null>(null)

function useProvideSession() {

  const [session, setSession] = useState<Session | null>(null)
  const subscription = useRef<ReturnType<typeof supabase.auth.onAuthStateChange> | null>(null)

  useEffect(() => {

    setSession(supabase.auth.session())

    // Subscribe to session updates
    subscription.current = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    // Unsubscribe from session updates
    return () => {
      if (subscription.current?.data) {
        subscription.current.data.unsubscribe()
      }
    }

  }, [])

  return session

}

export const SessionProvider: FunctionComponent = ({ children }) => {

  const session = useProvideSession()

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  )

}

export default function useSession() {
  const session = useContext(SessionContext)
  return session
}