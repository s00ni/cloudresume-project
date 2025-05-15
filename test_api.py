import asyncio
from playwright.sync_api import async_playwright, Playwright

async def run(playwright: Playwright):
    context = await playwright.request.new_context()
    response = await context.get("https://l7241ivbyh.execute-api.us-east-1.amazonaws.com/development/subpath")
    assert response.ok
    assert response.status == 200
    json_body = await response.json()
    assert isinstance(json_body["visitor_count"], int)


