FROM python:3.9

WORKDIR /
RUN /usr/local/bin/python -m pip install --upgrade pip

COPY requirements.txt /
RUN pip3 install --upgrade pip -r requirements.txt

COPY . .
EXPOSE 8080
CMD ["python","main.py"]