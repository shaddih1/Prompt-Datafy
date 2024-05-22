'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Tab } from '@headlessui/react'
import { FormInput, FormInputPassword } from '@/components'

//images
import avatar8 from '@/assets/images/avatars/img-8.jpg'

const AccountSetting = () => {
  const { control } = useForm()
  return (
    <div className="bg-slate-100 h-full mt-[77px]  py-3 px-3">
      <section className="relative overflow-hidden">
        <div className="container">
          <div className="flex">
            <div className="w-full">
              <h3 className="text-xl text-gray-800 mt-2">Account Settings</h3>
              <p className="mt-1 font-medium mb-4">
                Change your account settings
              </p>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="w-full">
              <div className="bg-white rounded">
                <div className="p-6">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <Tab.Group vertical>
                      <div className="col-span-1">
                        <Tab.List
                          as="nav"
                          aria-label="Tabs"
                          className="flex flex-row lg:flex-col gap-2 w-auto lg:w-full bg-slate-100 p-1.5 rounded-md lg:justify-start"
                        >
                          <Tab
                            as="button"
                            className={({ selected }) =>
                              `text-start py-2 px-4 rounded transition-all ${selected
                                ? 'bg-white text-primary'
                                : 'bg-transparent'
                              }`
                            }
                            type="button"
                          >
                            Account
                          </Tab>
                          <Tab
                            as="button"
                            className={({ selected }) =>
                              `text-start py-2 px-4 rounded transition-all ${selected
                                ? 'bg-white text-primary'
                                : 'bg-transparent'
                              }`
                            }
                            type="button"
                          >
                            Password
                          </Tab>
                          <Tab
                            as="button"
                            className={({ selected }) =>
                              `text-start py-2 px-4 rounded transition-all ${selected
                                ? 'bg-white text-primary'
                                : 'bg-transparent'
                              }`
                            }
                            type="button"
                          >
                            Notifications
                          </Tab>
                        </Tab.List>
                      </div>
                      <Tab.Panels className="lg:col-span-3 transition-all px-4 h-full">
                        <Tab.Panel id="account" className="min-h-[650px]">
                          <h4 className="text-base text-gray-800">
                            Account Information
                          </h4>
                          <form>
                            <h6 className="mt-6 mb-2.5 text-sm text-gray-800">
                              Your Avatar
                            </h6>
                            <div className="flex items-center gap-6">
                              <div className="sharink">
                                <div className="w-16 h-16">
                                  <Image
                                    width={64}
                                    height={64}
                                    src={avatar8}
                                    className="max-w-full max-h-full rounded-full shadow"
                                    alt="..."
                                  />
                                </div>
                              </div>
                              <div className="grow flex items-center gap-3">
                                <Link
                                  href=""
                                  className="inline-flex items-center justify-center rounded text-xs font-semibold border border-primary text-primary transition-all hover:shadow-lg hover:bg-primary hover:text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3 py-2"
                                >
                                  Upload
                                </Link>
                                <Link
                                  href=""
                                  className="inline-flex items-center justify-center rounded text-xs font-semibold border border-red-500 text-red-500 transition-all hover:shadow-lg hover:bg-red-500 hover:text-white hover:shadow-red-500/30 focus:shadow-none focus:outline focus:outline-red-500/40 px-3 py-2"
                                >
                                  Remove
                                </Link>
                              </div>
                            </div>
                            <hr className="my-6" />
                            <div className="grid grid-cols-2 items-center gap-6">
                              <div>
                                <FormInput
                                  control={control}
                                  name="fullname"
                                  label="Full Name"
                                  type="text"
                                  labelClassName="block text-sm font-semibold mb-1 text-gray-600"
                                  className="py-2 px-4 leading-6 block w-full text-gray-700 border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
                                  placeholder="Your Name"
                                  containerClassName="mb-4"
                                />
                                <FormInput
                                  control={control}
                                  name="email"
                                  label="Email"
                                  type="email"
                                  labelClassName="block text-sm font-semibold mb-1 text-gray-600"
                                  className="py-2 px-4 leading-6 block w-full text-gray-700 border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
                                  placeholder="Email"
                                  containerClassName="mb-4"
                                />
                              </div>
                              <div>
                                <FormInput
                                  control={control}
                                  name="user_name"
                                  label="User Name"
                                  type="text"
                                  labelClassName="block text-sm font-semibold mb-1 text-gray-600"
                                  className="py-2 px-4 leading-6 block w-full text-gray-700 border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
                                  placeholder="Username"
                                  containerClassName="mb-4"
                                />
                                <FormInput
                                  control={control}
                                  name="phone"
                                  label="Phone"
                                  type="text"
                                  labelClassName="block text-sm font-semibold mb-1 text-gray-600"
                                  className="py-2 px-4 leading-6 block w-full text-gray-700 border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
                                  placeholder="Phone number"
                                  containerClassName="mb-4"
                                />
                              </div>
                            </div>
                            {/* basic info end */}
                            <hr className="mb-3" />
                            {/* privacy settings start */}
                            <div className="flex flex-wrap my-4">
                              <div className="w-full">
                                <div className="mb-4">
                                  <label className="block text-sm font-semibold mb-1 text-gray-600">
                                    Profile Visibility
                                  </label>
                                  <div className="flex gap-4 my-2">
                                    <FormInput
                                      control={control}
                                      name="visibility"
                                      label="Public"
                                      type="radio"
                                      labelClassName="text-sm font-medium text-gray-700"
                                      className="ms-2 h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
                                      defaultChecked
                                    />
                                    <FormInput
                                      control={control}
                                      name="visibility"
                                      label="Private"
                                      type="radio"
                                      labelClassName="text-sm font-medium text-gray-700"
                                      className="ms-2 h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
                                    />
                                  </div>
                                  <small className="text-xs text-slate-500 mt-3">
                                    Making your profile public means anyone can
                                    see your information
                                  </small>
                                </div>
                              </div>
                              <div className="w-full mt-2">
                                <div className="mb-4">
                                  <label className="block text-sm font-semibold mb-1 text-gray-600">
                                    Contact Info Visibility
                                  </label>
                                  <div className="flex gap-4 my-2">
                                    <FormInput
                                      control={control}
                                      name="infovisibility"
                                      label="Public"
                                      type="radio"
                                      labelClassName="text-sm font-medium text-gray-700"
                                      className="ms-2 h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
                                      defaultChecked
                                    />
                                    <FormInput
                                      control={control}
                                      name="infovisibility"
                                      label="Private"
                                      type="radio"
                                      labelClassName="text-sm font-medium text-gray-700"
                                      className="ms-2  h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
                                    />
                                  </div>
                                  <small className="text-xs text-slate-500 mt-3">
                                    Making your contact info public means anyone
                                    can see your email and phone number
                                  </small>
                                </div>
                              </div>
                            </div>
                            {/* privacy settings end */}
                            <hr className="mb-3" />
                            {/* account removal start */}
                            <div className="flex">
                              <div className="w-full">
                                <div className="flex items-center my-2">
                                  <div className="shrink">
                                    <label className="inline text-sm font-semibold mb-1 text-gray-800">
                                      Remove account&nbsp;
                                    </label>
                                    <small className="text-xs text-slate-500">
                                      your account you will lose all your data
                                    </small>
                                  </div>
                                  <div className="grow text-end">
                                    <button
                                      type="button"
                                      className="inline-flex items-center justify-center rounded text-xs font-semibold border border-red-500 text-red-500 transition-all hover:shadow-lg hover:bg-red-500 hover:text-white hover:shadow-red-500/30 focus:shadow-none focus:outline focus:outline-red-500/40 px-3 py-2"
                                    >
                                      Remove Account
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* account removal end */}
                            <hr className="my-4" />
                            {/* save start */}
                            <div className="flex mt-3">
                              <div className="w-full">
                                <button
                                  type="submit"
                                  className="inline-flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold transition-all hover:shadow-lg bg-primary text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 "
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                            {/* save end */}
                          </form>
                        </Tab.Panel>
                        {/* end tab */}
                        <Tab.Panel id="password" className="min-h-[650px]">
                          <h4 className="text-base text-gray-800">Password</h4>
                          <form action="" className="mt-6">
                            <FormInputPassword
                              control={control}
                              name="current_password"
                              type="password"
                              label="Current Password"
                              labelClassName="block text-sm font-semibold mb-1 text-gray-600"
                              className="py-2 px-4 leading-6 block w-full text-gray-700 border-gray-300 rounded rounded-e-none text-sm focus:border-gray-300 focus:ring-0"
                              containerClassName="mb-4"
                            />
                            <FormInputPassword
                              control={control}
                              name="new_password"
                              type="password"
                              label="New Password"
                              labelClassName="block text-sm font-semibold mb-1 text-gray-600"
                              className="py-2 px-4 leading-6 block w-full text-gray-700 border-gray-300 rounded rounded-e-none text-sm focus:border-gray-300 focus:ring-0"
                              containerClassName="mb-4"
                            />
                            <FormInputPassword
                              control={control}
                              name="confirm_password"
                              type="password"
                              label="Confirm Password"
                              labelClassName="block text-sm font-semibold mb-1 text-gray-600"
                              className="py-2 px-4 leading-6 block w-full text-gray-700 border-gray-300 rounded rounded-e-none text-sm focus:border-gray-300 focus:ring-0"
                              containerClassName="mb-4"
                            />
                            <hr className="my-6" />
                            <div className="row mt-3">
                              <div className="col-lg-12">
                                <button
                                  type="submit"
                                  className="inline-flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold transition-all hover:shadow-lg bg-primary text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40"
                                >
                                  Update Password
                                </button>
                              </div>
                            </div>
                          </form>
                        </Tab.Panel>
                        {/* end tab */}
                        <Tab.Panel id="notifications" className="min-h-[650px]">
                          <h4 className="text-base text-gray-800">Password</h4>
                          <div className="my-6">
                            <h6 className="text-sm font-medium text-gray-800 mb-4">
                              Send me an email, when
                            </h6>
                            <div className="space-y-3">
                              <div className="flex gap-2">
                                <label
                                  htmlFor="check1"
                                  className="relative inline-flex cursor-pointer items-center"
                                >
                                  <input
                                    type="checkbox"
                                    id="check1"
                                    className="peer sr-only"
                                    defaultChecked
                                  />
                                  <div className="h-5 w-9 rounded-full bg-gray-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50" />
                                </label>
                                <span className="text-sm font-medium text-gray-700">
                                  Someone mentions me
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <label
                                  htmlFor="check2"
                                  className="relative inline-flex cursor-pointer items-center"
                                >
                                  <input
                                    type="checkbox"
                                    id="check2"
                                    className="peer sr-only"
                                  />
                                  <div className="h-5 w-9 rounded-full bg-gray-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50" />
                                </label>
                                <span className="text-sm font-medium text-gray-700">
                                  Someone replies to me
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <label
                                  htmlFor="check3"
                                  className="relative inline-flex cursor-pointer items-center"
                                >
                                  <input
                                    type="checkbox"
                                    id="check3"
                                    className="peer sr-only"
                                    defaultChecked
                                  />
                                  <div className="h-5 w-9 rounded-full bg-gray-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50" />
                                </label>
                                <span className="text-sm font-medium text-gray-700">
                                  Someone shares the content
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <label
                                  htmlFor="check4"
                                  className="relative inline-flex cursor-pointer items-center"
                                >
                                  <input
                                    type="checkbox"
                                    id="check4"
                                    className="peer sr-only"
                                  />
                                  <div className="h-5 w-9 rounded-full bg-gray-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50" />
                                </label>
                                <span className="text-sm font-medium text-gray-700">
                                  There is a new published content
                                </span>
                              </div>
                            </div>
                          </div>
                          <hr className="my-6" />
                          <div className="my-6">
                            <h6 className="text-sm font-medium text-gray-800 mb-4">
                              Send me an email, when
                            </h6>
                            <div className="space-y-3">
                              <div className="flex gap-2">
                                <label
                                  htmlFor="check5"
                                  className="relative inline-flex cursor-pointer items-center"
                                >
                                  <input
                                    type="checkbox"
                                    id="check5"
                                    className="peer sr-only"
                                    defaultChecked
                                  />
                                  <div className="h-5 w-9 rounded-full bg-gray-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50" />
                                </label>
                                <span className="text-sm font-medium text-gray-700">
                                  Weekly newsletter
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <label
                                  htmlFor="check6"
                                  className="relative inline-flex cursor-pointer items-center"
                                >
                                  <input
                                    type="checkbox"
                                    id="check6"
                                    className="peer sr-only"
                                  />
                                  <div className="h-5 w-9 rounded-full bg-gray-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50" />
                                </label>
                                <span className="text-sm font-medium text-gray-700">
                                  Weekly jobs
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <label
                                  htmlFor="check7"
                                  className="relative inline-flex cursor-pointer items-center"
                                >
                                  <input
                                    type="checkbox"
                                    id="check7"
                                    className="peer sr-only"
                                    defaultChecked
                                  />
                                  <div className="h-5 w-9 rounded-full bg-gray-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50" />
                                </label>
                                <span className="text-sm font-medium text-gray-700">
                                  Events new me
                                </span>
                              </div>
                            </div>
                          </div>
                          <hr className="my-6" />
                          <div className="flex mt-4">
                            <div className="w-full">
                              <button
                                type="submit"
                                className="inline-flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold transition-all hover:shadow-lg bg-primary text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40"
                              >
                                Update Preferences
                              </button>
                            </div>
                          </div>
                        </Tab.Panel>
                        {/* end tab */}
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccountSetting
