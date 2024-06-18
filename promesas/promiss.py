import asyncio

async def download_file(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            data = await response.read()
            print(f"Downloaded {url}")
            return data

async def main():
    task1 = asyncio.create_task(download_file("https://www.youtube.com/watch?v=kBOoJO-E5Tw&ab_channel=DearCBeats"))
    task2 = asyncio.create_task(download_file("https://www.youtube.com/watch?v=0AKUyu-IjGU&ab_channel=pyserri"))

    await task1
    await task2

if __name__ == "__main__":
    asyncio.run(main())
