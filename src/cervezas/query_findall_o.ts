/*let where_f = [];
if(f_amargor){
  where_f.push({id_amargor: In(f_amargor)});
};
if(f_estilo){
  where_f.push({id_tipo: In(f_estilo)});
};
if(f_categoria){
  where_f.push({tipo:{categoria_id: In(f_categoria)}});
};
if(f_grados){
  if(f_grados == 1){
    where_f.push({graduacion: LessThan(5.0)});
  }else if(f_grados == 3){
    where_f.push({graduacion: MoreThan(7.0)})
  }else{
    where_f.push({graduacion: Between(4.9, 7.1)})
  }
};
if(f_color){
  where_f.push({tipo:{color_id: In(f_color)}});
};
if(f_origen){
  where_f.push({proveedor:{ comuna:{ region:{zona_id: In(f_origen)} } } });
};+*/