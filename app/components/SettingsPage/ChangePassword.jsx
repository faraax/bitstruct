import useAuth from "@/app/hooks/useAuth"
import { useAuthContext } from "@/app/hooks/useAuthContext"
import { useState } from "react"

export default function ChangePassword() {
    const { profiles, selectedProfile, dispatch, subscription, user: { email } } = useAuthContext()
    // const { user: { email } } = useAuthContext()
    // const [msg, setMsg] = useState(null)
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)
    const { forgotPassword, loading, error, message } = useAuth()

    const handleChangePasswordRequest = () => {
        // console.log({ email });
        forgotPassword({ email })
    }

    return (
        <div>
            <div className='bg-white rounded-xl gap-5 px-10 py-3 flex flex-col justify-center shadow-lg h-full'>
                <div className='w-full bg-mute/50 h-1 mt-4 relative'>
                    <span className='bg-primary absolute h-full top-0 left-0 z-10' style={{ width: `${(100 / subscription?.product.metadata.Profiles) * profiles?.length}%` }} />
                </div>
                <div className='flex justify-between'>
                    <div>
                        {selectedProfile && <h2 className='text-mute'>{selectedProfile.profile_name}</h2>}
                    </div>
                    <div className='flex items-center gap-5'>
                        <p className='text-mute flex gap-3 items-center'>
                            Profiles Available : {profiles?.length}/{subscription?.product.metadata.Profiles}
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>You can change password by sending a new password request</p>
                        <div className='flex justify-between items-center py-10'>
                            {
                                loading && <button
                                    disabled
                                    className='cursor-wait flex px-4 py-1 items-center gap-2 bg-primary text-white rounded-xl hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD]'>
                                    <svg className="h-5 w-5 animate-spin" viewBox="3 3 18 18">
                                        <path
                                            className="fill-white"
                                            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                        <path
                                            className="fill-primary"
                                            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                                    </svg>
                                    Request sent. Logging out...
                                </button>
                            }
                            {
                                !loading && <button
                                    onClick={handleChangePasswordRequest}
                                    className='text-white bg-primary p-4 py-1 rounded-xl hover:bg-primary/80 duration-150'>
                                    Send Request
                                </button>
                            }
                        </div>
                    </div>
                    {
                        message && <h3 className="text-green-300">{message}</h3>
                    }
                    {
                        error && <h3 className="text-red-300">{error}</h3>
                    }
                </div>
            </div>
        </div>
    )
}
