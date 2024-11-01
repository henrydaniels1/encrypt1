import { useEffect } from 'react'
import { useWallet } from './WalletContext' // Import wallet context
import { Header } from '../Header'
import { useNavigate } from 'react-router-dom'

export const Web3Auth = () => {
  const { walletAddress, connectWallet } = useWallet()
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to landing page if wallet is connected
    if (walletAddress) {
      navigate('/')
    }
  }, [walletAddress, navigate])

  return (
    <div className='p-4 text-center'>
      <Header />
      <h2 className='text-xl font-bold mb-4'>Connect with Web3 Wallet</h2>
      <button
        onClick={connectWallet}
        className='bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700'>
        Connect Wallet
      </button>
    </div>
  )
}
