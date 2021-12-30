pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }

    stage('Test') {
     steps{
       echo '----------------- This is a test phase ----------'
     }
    }

    stage('Build') {
      steps { sh 'ng build --prod' }
    }
  

        stage('Docker Build') {
            steps {
                echo '----------------- This is a build docker image phase ----------'
                sh '''
                    docker image build -t foodbox-ui .
                '''
            }
        }

        stage('Docker Deploy') {
            steps {
                echo '----------------- This is a docker deployment phase ----------'
                sh '''
                 (if  [ $(docker ps -a | grep foodbox-ui | cut -d " " -f1) ]; then \
                        echo $(docker rm -f foodbox-ui); \
                        echo "---------------- successfully removed foodbox-ui ----------------"
                     else \
                    echo OK; \
                 fi;);
            docker container run --restart always --name foodbox-ui -p 8084:8084 -d foodbox-ui
            '''
            }
        }
        
    }
}
