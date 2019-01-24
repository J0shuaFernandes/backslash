from selenium import webdriver
import time
# a script to test the website 'backslash'
url = 'http://127.0.0.1:8000'
chrome_dir = 'C:/Users/Josh/Downloads/chromedriver.exe'

driver = webdriver.Chrome(chrome_dir)
driver.get(url)

driver.find_element_by_id('home').click()
time.sleep(3)
driver.find_element_by_id('blog').click()
time.sleep(3)
driver.find_element_by_id('events').click()
time.sleep(3)