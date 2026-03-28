import { NextResponse } from 'next/server'

let waitlist: { email: string; type: string; businessName?: string; createdAt: string }[] = []

export async function POST(request: Request) {
  try {
    const { email, type, businessName } = await request.json()
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }
    
    const exists = waitlist.some(item => item.email === email)
    if (exists) {
      return NextResponse.json({ message: 'Already on waitlist' }, { status: 200 })
    }
    
    waitlist.push({ email, type: type || 'student', businessName, createdAt: new Date().toISOString() })
    console.log(`📧 New waitlist signup: ${email} (${type || 'student'})`)
    console.log(`📊 Total waitlist: ${waitlist.length}`)
    
    return NextResponse.json({ success: true, message: 'Added to waitlist' }, { status: 200 })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ 
    count: waitlist.length,
    students: waitlist.filter(w => w.type === 'student').length,
    businesses: waitlist.filter(w => w.type === 'business').length
  })
}