import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/CancellationMail';
import redisConfig from '../config/redis';

const jobs = [CancellationMail];

class Queue {
   // Criando a fila
   constructor() {
      this.queues = {};

      this.init();
   }

   // Conectando com o Redis instanciando o Bee
   init() {
      jobs.forEach(({ key, handle }) => {
         this.queues[key] = {
            bee: new Bee(key, {
               redis: redisConfig,
            }),
            handle,
         };
      });
   }

   // Armazena o job na fila
   add(queue, job) {
      return this.queues[queue].bee.createJob(job).save();
   }

   // Processa o job
   proccessQueue() {
      jobs.forEach((job) => {
         const { bee, handle } = this.queues[job.key];

         bee.process(handle);
      });
   }
}

export default new Queue();
