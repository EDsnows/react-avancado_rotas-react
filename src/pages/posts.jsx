import {PostsList} from '../components/posts';

const Posts = () => {
    return <PostsList />;
};

// ao fazer uma importação do tipo nomeada, garantimos que caso aconteça algum tipo de alteração de importação, não será mostrada a menos que seja corrigido (o que gera uma padronização em todo o projeto)
export {Posts};
