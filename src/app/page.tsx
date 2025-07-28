'use client';
import Image from "next/image";
import Logo from './logo.svg'
import QuestionsAnswer from "./questions-answer";
import { useEffect, useState } from "react";
import { getDrafts, getJokes, getRiddles, getUsers } from "./firebase/db";
import UserList from "./user-list";

export default function Home() {
  const [getState, setGetState] = useState('users');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getUsersList();
  }, []);

  // Get riddles from firebase
  const getMyRiddles = async () => {
    setGetState('riddles');
    const myRiddles = await getRiddles();
    if (myRiddles && myRiddles != null) {
      setData(myRiddles);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  // Get jokes from firebase
  const getMyJokes = async () => {    
    setGetState('jokes');
    const myJokes = await getJokes();
    if (myJokes && myJokes != null) {
      setData(myJokes);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  // Get jokes from firebase
  const getUserDrafts = async () => {
    setGetState('drafts');
    const myJokes = await getDrafts();
    if (myJokes && myJokes != null) {
      setData(myJokes);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  // Get jokes from firebase
  const getUsersList = async () => {
    setGetState('users');
    const users = await getUsers();
    if (users && users != null) {
      setData(users);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <section className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <Image src={Logo} alt="Your Company" className="size-30" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Reports</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-1 flex-col pb-2 lg:min-w-0">
        <div className="grow p-6">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">Good afternoon, Mahesh..!</h1>
            <div className="mt-8 flex items-end justify-between">
              <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">Overview</h2>
              <div>
                <span data-slot="control" className="group relative block w-full before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset has-data-focus:after:ring-2 has-data-focus:after:ring-blue-500 has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none">
                  <select name="period" className="relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)] pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pr-[calc(--spacing(9)-1px)] sm:pl-[calc(--spacing(3)-1px)] [&amp;_optgroup]:font-semibold text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20 bg-transparent dark:bg-white/5 dark:*:bg-zinc-800 focus:outline-hidden data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-600 dark:data-invalid:data-hover:border-red-600 data-disabled:border-zinc-950/20 data-disabled:opacity-100 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/2.5 dark:data-hover:data-disabled:border-white/15" id="headlessui-select-:Rp9uhuja:" data-headlessui-state="">
                    <option value="last_week">Last week</option>
                    <option value="last_two">Last two weeks</option>
                    <option value="last_month">Last month</option>
                    <option value="last_quarter">Last quarter</option>
                  </select>
                </span>
              </div>
            </div>
            <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              <button type="button" className={getState === 'users' ? 'active text-left pl-2 pb-2' : 'text-left pl-2 pb-2'} onClick={getUsersList}>
                <hr role="presentation" className="w-full border-t border-zinc-950/10 dark:border-white/10" />
                <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Total Users</div>
                <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">2.6M</div>
                <div className="mt-3 text-sm/6 sm:text-xs/6">
                  <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">+4.5%</span>
                  <span className="text-zinc-500">from last week</span>
                </div>
              </button>
              <button type="button" className={getState === 'riddles' ? 'active text-left pl-2 pb-2' : 'text-left pl-2 pb-2'} onClick={getMyRiddles}>
                <hr role="presentation" className="w-full border-t border-zinc-950/10 dark:border-white/10" />
                <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Total Riddles</div>
                <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">455</div>
                <div className="mt-3 text-sm/6 sm:text-xs/6">
                  <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-pink-400/15 text-pink-700 group-data-hover:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-data-hover:bg-pink-400/20">-0.5%</span>
                  <span className="text-zinc-500">from last week</span>
                </div>
              </button>
              <button type="button" className={getState === 'jokes' ? 'active text-left pl-2 pb-2' : 'text-left pl-2 pb-2'} onClick={getMyJokes}>
                <hr role="presentation" className="w-full border-t border-zinc-950/10 dark:border-white/10" />
                <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Total Jokes</div>
                <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">888</div>
                <div className="mt-3 text-sm/6 sm:text-xs/6">
                  <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">+4.5%</span>
                  <span className="text-zinc-500">from last week</span>
                </div>
              </button>
              <button type="button" className={getState === 'drafts' ? 'active text-left pl-2 pb-2' : 'text-left pl-2 pb-2'} onClick={getUserDrafts}>
                <hr role="presentation" className="w-full border-t border-zinc-950/10 dark:border-white/10" />
                <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Total Drafts</div>
                <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">823</div>
                <div className="mt-3 text-sm/6 sm:text-xs/6">
                  <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">+21.2%</span>
                  <span className="text-zinc-500">from last week</span>
                </div>
              </button>
            </div>
            <div className="flow-root">
              <hr className="mt-14 mb-10 w-full border-t border-zinc-950/10 dark:border-white/10" />
              {
                getState === 'riddles' && <QuestionsAnswer questionsAnswers={data} />
              }
              {
                getState === 'jokes' && <QuestionsAnswer questionsAnswers={data} />
              }   
              {
                getState === 'drafts' && <QuestionsAnswer questionsAnswers={data} />
              }                                       
              {
                getState === 'users' && <UserList users={data} />
              }
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
