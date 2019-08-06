import React from "react";
import "./style.css"

function Jumbotron() {
    return (
        <div>
            <div id="cover">
                <div className="jumbotron jumbotron-fluid">
                    <div className="btn-group rightHeader">
                        <a href="/signin"><button className="btn btn-outline-primary">Sign-In</button></a>
                        <a href="/signup"><button className="btn btn-outline-primary">Sign-Up</button></a>
                    </div>
                    <div className="btn-group leftHeader">
                        <a href="/"><button className="btn btn-outline-primary">Home</button></a>
                        <a href="/preferences"><button className="btn btn-outline-primary">Preferences</button></a>
                        <a href="/food"><button className="btn btn-outline-primary">Food</button></a>
                    </div>
                    <div className="container">
                        <h1 className="title display-3 text-center" style= {{fontWeight:100}} >Shelt<strong style={{fontWeight:600}}>R</strong></h1>
                        <p className="lead string-1 text-center">lalala</p>

                    </div>
                </div>
            </div>

            <div className="content">
                <h1>welcome.</h1>
                <p>Lorem ipsum dolor sit amet, donec at ut ut blandit, odio massa morbi vel cillum urna, nam ullamcorper diam, dolor vivamus. Sed cursus viverra, fames neque nisl suscipit, et dictum pellentesque, mauris a volutpat rhoncus in id. Pede velit sit quis sed, dui elit, diam faucibus eros. Suspendisse donec et in, feugiat a eget dolor mi, placerat et leo feugiat, elit amet et vestibulum nullam molestie porta. Pede ipsum dignissim magna, eget fringilla lorem, vel vitae donec ornare, scelerisque rutrum quis vehicula turpis. Ac lacus pellentesque sit, quis interdum erat neque, aliquet saepe penatibus nulla at elit, rhoncus eget facilisis tortor vehicula ut. Orci senectus curabitur nunc, ac neque non parturient in diam. Dui imperdiet fusce duis malesuada maecenas.
        </p><p>
                    Montes in aliquam sapien donec, velit massa feugiat ac sed. Lorem viverra justo, risus luctus potenti, et vel vel mi sit nulla ultricies. Non ligula vitae mauris felis, accumsan molestie facilisi ipsum natoque, justo pretium curabitur nunc curabitur libero sit, lectus dolor turpis eget. Dapibus malesuada arcu odio quis ipsum in, et sit in eleifend dis.
        </p><p>
                    Dolor facilisis. Parturient luctus in vehicula felis at, fermentum gravida ornare ante, lorem volutpat nec sed vitae tortor, placerat sit congue faucibus tincidunt, pellentesque nunc sed cras eros eget. Odio placerat nulla viverra fames molestie, et pede nam hac parturient nascetur risus, sociis felis lacinia et accumsan donec habitant. Vestibulum enim, ac leo urna lacinia ut nibh. Senectus sit, nulla fermentum imperdiet lacus nulla tincidunt non, elementum in, et eget ut at vivamus, quisque adipiscing sed iaculis nunc fusce pretium. Per lectus libero neque nunc porta, odio nibh ligula leo vulputate a aliquam, libero nulla pellentesque vitae tempor, mollis molestie felis diam congue. Nisl vestibulum ridiculus fusce eget non. At integer rhoncus aliquam autem, in nam est eget, sed luctus, luctus luctus dolor potenti, aliquet sit aliquet condimentum eget tincidunt pellentesque. Parturient turpis, enim dictumst semper in vitae. Magna sapien eu nunc, penatibus id eros lectus.
        </p><p>
                    Quis ac mauris, pellentesque hendrerit amet fusce viverra luctus massa, sem elementum at eros lorem eu, at sapien elementum, nec velit sociis fames vitae nam. Ac viverra justo vestibulum sollicitudin sed lacus. Donec do volutpat rhoncus leo id et. Mi aptent ut duis sit nulla morbi, quisque et leo, mollitia convallis in ut nam dui, in iaculis metus amet nisl, nec orci faucibus mauris. Sodales eu mollit orci justo metus, adipiscing amet vestibulum luctus, et a lectus, sed integer. Vivamus nihil felis cursus. Ac aliquam nibh diam condimentum, ac eros vitae parturient neque accumsan purus, orci auctor tellus, nunc ullamcorper tellus vivamus hymenaeos amet. Sem sagittis ipsum phasellus amet eros, lectus dapibus, dolor officiis metus non molestie, sed dui quis gravida etiam wisi tincidunt, lobortis est volutpat ut rhoncus donec quisque. Sit pulvinar, ut viverra at, erat wisi semper consectetuer sollicitudin vulputate. Ante massa quam odio wisi, justo vitae pellentesque erat natoque eget. Tortor mattis arcu, sem libero nec sociis blandit. Donec neque sollicitudin, auctor sed nunc, rhoncus nascetur habitant, amet praesent id.
        </p><p>
                    Nulla malesuada suspendisse elementum, scelerisque massa consectetuer, sed fringilla, nec wisi orci morbi lacus. Luctus a senectus id ac purus tristique, dolor felis, libero phasellus posuere integer vestibulum vestibulum. Labore arcu quis taciti, nunc interdum, eget elit leo mattis provident sed sed, imperdiet risus fames, accumsan velit ullamcorper vel iaculis. Faucibus quae odio justo risus eu nonummy, purus nisl sed tellus turpis torquent adipiscing, a massa ultrices praesent. Praesent cras auctor velit lacus scelerisque volutpat, fermentum et scelerisque blandit sint lorem donec, quis donec lectus proin cras sollicitudin semper, mattis penatibus dictum. Fusce tellus, lobortis neque amet posuere, ac vestibulum sed auctor urna massa. Ut ut wisi, in wisi ligula in pretium felis.</p>
            </div>
        </div>
    );
}


export default Jumbotron;