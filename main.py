import sys
import markdown

from bs4 import BeautifulSoup

argv = sys.argv[1:]
def main():
  f = argv[0]
  fd = open(f).read()
  fhtml = markdown.markdown(fd)
  phtml = BeautifulSoup(fhtml, features="lxml")
  
  h1s = phtml.body.find_all('h1')
  h2s = phtml.body.find_all('h2')
  h3s = phtml.body.find_all('h3')
  h4s = phtml.body.find_all('h4')
  h5s = phtml.body.find_all('h5')
  h6s = phtml.body.find_all('h6')

  emps = phtml.body.find_all('em')
  imgs = phtml.body.find_all('img')
  lnks = phtml.body.find_all('a')
  quotes = phtml.body.find_all('blockquote')
  inl = phtml.body.find_all('code')

  # EEEEEEEEE

main()